const questionsRouter = require('express').Router()
const {
  getQuestions,
  // createQuestion,
  getQuestion,
  // updateQuestion,
  // deleteQuestion
} = require('../controllers/questions')

questionsRouter.get('/', getQuestions)
// questionsRouter.post('/', createQuestion)
questionsRouter.get('/single', getQuestion)
// questionsRouter.put('/:id', updateQuestion)
// questionsRouter.delete('/:id', deleteQuestion)

module.exports = questionsRouter
