const questions = require('../configs/questions.js')
const { DEFAULT_KEYWORDS } = require('../configs/config')

const getCategoriesFromAnswers = ({ answers, maxPrice, keywordsFromUser }) => {
  const result = {
    keywords: [],
    min: undefined,
    max: undefined
  }
  questions.forEach(question => {
    if (answers[String(question.id)]) {
      const answer = question.answers.find(answer => Number(answer.id) === Number(answers[String(question.id)]))
      
      if (!answer.key) { return }
      if(answer.calculate) {
        const [ min, max ] = answer.key.split('__')
        const percentage = maxPrice / 100
        result.min = percentage * min
        result.max = percentage * max
      } else {
        result.keywords.push(answer.key)
      }
    }
  })
  if (!result.keywords.length) {
    return { keywords: keywordsFromUser || DEFAULT_KEYWORDS }
  }
  return {
    ...result,
    keywords: result.keywords.join(' '),
  }
}


module.exports = getCategoriesFromAnswers
