const questions = require('../configs/questions.js')
const findQuestionById = require('./find-question-by-id.js')

// const answers = { 1: 2, 2: 4, 3: 5 }

const findNextQuestion = ({ answers }) => {
  const questionsIds = Object.keys(answers).sort((a, b) => a - b)
  const lastAnsweredQuestionId = questionsIds[questionsIds.length - 1]
  return checkQuestionValidity({ questionId: Number(lastAnsweredQuestionId) + 1, answers })
}

const checkAnswerValidity = ({ answer, answers }) => {
  const { condition } = answer
  console.log({ answer, answers })
  if (!condition) { return answer }
  // одновременно должно выполняться
  const conditionParsed = condition.split('/')
  for (let x = 0; x < conditionParsed.length; x++) {
    // "2__6||8||9" => [2, 6||8||9]
    // "2__6" => [2, 6]
    const singleAnswerCondition = conditionParsed[x].split('__')
    // если только один ответ подразумевается
    if (singleAnswerCondition[1].indexOf('||') === -1) {
      // "2__6"
      if (Number(answers[singleAnswerCondition[0]]) !== Number(singleAnswerCondition[1])) {
        // если ответ на второй вопрос не равен тому который мы ищем, то ответ сразу отсеиваем
        return false
      }
    } else {
      // если несколько ответов "2__6||8||9" 
      const conditionAnswers = singleAnswerCondition[1].split('||')
      // [6, 8 , 9]
      for (let x = 0; x < conditionAnswers.length; x++) {
        // если хотя бы один из ответов соотносится с тем, как ответил человек
        if (Number(answers[singleAnswerCondition[0]]) === Number(conditionAnswers[x])) {
          return true
        }
      }
      // если ни один не найден
      return false
    }
  }
  return true
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
  console.log('here')
  return { ...question, answers: question.answers ? question.answers.filter(answer => checkAnswerValidity({ answers, answer })) : null }
}

// findNextQuestion({ answers })

module.exports = findNextQuestion