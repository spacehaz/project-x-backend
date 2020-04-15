const Question = require('../models/question')
const { BadRequestError } = require('../errors')
const { findQuestionById, findNextQuestion } = require('../modules')
const { BAD_REQUEST } = require('../configs/constants')
const questions = require('../configs/questions.js')


const getQuestions = (req, res, next) => {
  return res.status(200).send({ questions, success: true })
  // Question.find({})
  //   .then(questions => {
  //     res.status(200).send({ questions, success: true })
  //   })
  //   .catch(next)
}




const getQuestion = (req, res, next) => {
  const { answers } = req.query
  try {
    const answersParsed = JSON.parse(answers)
    if (Object.keys(answersParsed).length === 0) {
      const initialQuestion = findQuestionById({ questionId: 1 })
      res.status(200).send({ question: initialQuestion, success: true })
    } else {
      const nextQuestion = findNextQuestion({ answers: answersParsed })
      res.status(200).send({ question: nextQuestion, success: true })
    }
  } catch (e) {
    next(new BadRequestError(BAD_REQUEST))
  }
}

const createQuestion = (req, res, next) => {
  const { question, type, requestable, filter } = req.body
  Question.create({ question, type, requestable, filter })
    .then(item => res.status(201).send(item))
    .catch((e) => next(new BadRequestError(e.message)))
}

const deleteQuestion = (req, res, next) => {
  const { id } = req.params
  Question
    .findOne({ _id: id })
    .orFail(() => {
      throw new NotFoundError(ITEM_NOT_FOUND)
    })
    .then(question => {
        Question.findByIdAndDelete(id)
          .then((result) => res.status(200).send(result))
          .catch(next)
    })
    // айдишник невалиден
    .catch(next)
}

const updateQuestion = (req, res, next) => {
  const { id } = req.params
  const { question, type, requestable, filter } = req.body
  Question.
    findOne({ _id: id })
    .orFail(() => {
      throw new NotFoundError(ITEM_NOT_FOUND)
    })
    .then(_ => {
      Question.findByIdAndUpdate(id, { question, type, requestable, filter }, { runValidators: true, omitUndefined: true, upsert: true })
        .then(question => res.status(201).send(question))
        .catch((e) => next(new BadRequestError(e.message)))
    })
}

module.exports = {
  getQuestions,
  createQuestion,
  getQuestion,
  updateQuestion,
  deleteQuestion
}
