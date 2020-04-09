const itemsRouter = require('express').Router()
const { getItems } = require('../controllers/items')
const celebrateCheck = require('../modules/celebrate-check')

itemsRouter.get('/', getItems)

module.exports = itemsRouter
