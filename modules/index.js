const findQuestionById = require('./find-question-by-id')
const findNextQuestion = require('./find-next-question')
const getCategoriesFromAnswers = require('./get-categories-from-answers')
const parseCategories = require('./parse-categories')

module.exports = {
  findQuestionById,
  findNextQuestion,
  getCategoriesFromAnswers,
  parseCategories
}