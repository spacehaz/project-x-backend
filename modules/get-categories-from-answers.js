const questions = require('../configs/questions.js')
const { DEFAULT_KEYWORDS } = require('../configs/config')
const parseCategories = require('./parse-categories')

const getCategoriesFromAnswers = ({ answers, maxPrice }) => {
  const keywords = []
  questions.forEach(question => {
    if (answers[String(question.id)]) {
      const answer = question.answers.find(answer => Number(answer.id) === Number(answers[String(question.id)]))
      if (!answer.key) { return }
      keywords.push(answer.key)
    }
  })

  const categories = parseCategories({ keywords, maxPrice })
  const [ min, max ] = categories['PRICE'] || []

  return {  
    min,
    max,
    categories
  }
}


module.exports = getCategoriesFromAnswers
