const Question = require('../models/question')
const { BadRequestError } = require('../errors')

const getQuestions = (req, res, next) => {
  Question.find({})
    .then(questions => {
      res.status(200).send(questions)
    })
    .catch(next)
}

const getQuestion = (req, res, next) => {
  const { id } = req.params
  Question
    .findOne({ _id: id })
    // item в принципе не найден в БД по валидному айдишнику
    .orFail(() => {
      throw new NotFoundError(ITEM_NOT_FOUND)
    })
    .then(question => {
      res.status(200).send(question)
    })
    // айдишник невалиден
    .catch(next)
}

const createQuestion = (req, res, next) => {
  Question.create({ question, type, requestable })
    .then(item => res.status(201).send(item))
    .catch((e) => next(new BadRequestError(e.message)))
}

module.exports = {
  getQuestions,
  createQuestion,
  getQuestion
}
