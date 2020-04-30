const findQuestionById = require('./find-question-by-id')
const findNextQuestion = require('./find-next-question')
const getCategoriesFromAnswers = require('./get-categories-from-answers')
const parseCategories = require('./parse-categories')
const mergeKeywords = require('./merge-keywords')

module.exports = {
  findQuestionById,
  findNextQuestion,
  getCategoriesFromAnswers,
  parseCategories,
  mergeKeywords
}