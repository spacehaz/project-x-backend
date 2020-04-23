const questions = require('../configs/questions.js')
const { DEFAULT_KEYWORDS } = require('../configs/config')
const parseCategories = require('./parse-categories')

const getCategoriesFromAnswers = ({ answers, maxPrice, keywordsFromUser }) => {
  const result = {
    keywords: []
  }
  questions.forEach(question => {
    if (answers[String(question.id)]) {
      const answer = question.answers.find(answer => Number(answer.id) === Number(answers[String(question.id)]))
      if (!answer.key) { return }
      result.keywords.push(answer.key)
    }
  })

  if (!result.keywords.length) {
    return { keywords: keywordsFromUser || DEFAULT_KEYWORDS }
  }

  const categories = parseCategories({ categories: result.keywords, maxPrice })
  const [ min, max ] = categories['PRICE'] || []
  const categoriesJoined = Object.keys(categories).filter(category => {
    return category !== 'PRICE'
  }).map(category => {
    const values = Array.from(new Set(categories[category]))
    if (['CONTROL', 'SIZE', 'EXPERIENCE', 'EXTRA'].indexOf(category) > -1) {
      return values.map(value => `0_${value}`).join(' ')
    }
    return values.map(value => `1_${value}`).join(' ')
  }).join(' ').trim() + ' 1_' + DEFAULT_KEYWORDS
  return {
    min,
    max,
    keywords: categoriesJoined,
  }
}


module.exports = getCategoriesFromAnswers
