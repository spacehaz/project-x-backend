const router = require('express').Router()
const { NotFoundError } = require('../errors')
const { NOT_FOUND } = require('../configs/constants')
const itemsRouter = require('./items')

// тут в порядке очередности просто подключаем остальные роутеры
router.use('/items', itemsRouter )

router.use('*', (req, res, next) => next(new NotFoundError(NOT_FOUND)))
// это миддлвеар на получение 404 ошибки
module.exports = router
