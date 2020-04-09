const questionsRouter = require('express').Router()
const { getQuestions, createQuestion, getQuestion } = require('../controllers/questions')

questionsRouter.get('/', getQuestions)
questionsRouter.post('/', createQuestion)
questionsRouter.get('/:id', getQuestion)

module.exports = questionsRouter
