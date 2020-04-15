const itemsRouter = require('express').Router()
const { getFilters, createFilter } = require('../controllers/filters')

itemsRouter.get('/', getFilters)
itemsRouter.post('/', createFilter)

module.exports = itemsRouter
