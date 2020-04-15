const questions = require('../configs/questions.js')

module.exports = ({ questionId = null }) => questions.find(question => question.id === questionId)
