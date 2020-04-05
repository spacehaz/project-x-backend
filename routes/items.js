const itemsRouter = require('express').Router()
const { getItems, createItem, deleteItem } = require('../controllers/items')
const celebrateCheck = require('../modules/celebrate-check')

itemsRouter.get('/', getItems)
itemsRouter.post('/', celebrateCheck, createItem)
itemsRouter.delete('/:itemId', deleteItem)

module.exports = itemsRouter
