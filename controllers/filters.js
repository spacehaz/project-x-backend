const Filter = require('../models/filter')
const { BadRequestError } = require('../errors')

const getFilters = (req, res, next) => {
  Filter.find({})
    .then(filters => {
      res.status(200).send({
        success: true,
        data: filters
      })
    })
    .catch(next)
}


const createFilter = (req, res, next) => {
  const { title } = req.body
  Filter.create({ title })
    .then(filter => res.status(201).send(filter))
    .catch((e) => next(new BadRequestError(e.message)))
}

module.exports = {
  getFilters,
  createFilter
}
