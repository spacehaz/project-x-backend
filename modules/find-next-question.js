const questions = require('../configs/questions.js')
const findQuestionById = require('./find-question-by-id.js')

// const answers = { 1: 2, 2: 4, 3: 5 }

const findNextQuestion = ({ answers }) => {
  const questionsIds = Object.keys(answers).sort((a, b) => a - b)
  const lastAnsweredQuestionId = questionsIds[questionsIds.length - 1]
  return checkQuestionValidity({ questionId: Number(lastAnsweredQuestionId) + 1, answers })
}

const checkQuestionValidity = ({ questionId, answers }) => {
  const question = findQuestionById({ questionId })
  if (!question) { return }
  const { condition } = question
  if (!condition) { return question }
  const conditionParsed = condition.split('/')
  for (let x = 0; x < conditionParsed.length; x++) {
    const singleQiestionCondition = conditionParsed[x].split('__')
    if (Number(answers[singleQiestionCondition[0]]) !== Number(singleQiestionCondition[1])) {
      return checkQuestionValidity({ answers, questionId: Number(questionId) + 1 })
    }
  }
  return question
}

// findNextQuestion({ answers })

module.exports = findNextQuestion