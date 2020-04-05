const Item = require('../models/item')
const { NotFoundError, ForbiddenError, BadRequestError } = require('../errors')

const { ITEM_NOT_FOUND } = require('../configs/constants')

const getItems = (req, res, next) => {
  Item.find({})
    .select('+link')
    .then((items) => {
      res.status(200).send(items)
    })
    .catch(next)
}

const createItem = (req, res, next) => {
  console.log('request is here')
  const { title, link } = req.body
  Item.create({ title, link })
    .then(item => res.status(201).send({
      title: item.title,
      link: item.link
    }))
    .catch((e) => next(new BadRequestError(e.message)))
}

const deleteItem = (req, res, next) => {
  const { itemId } = req.params
  Item
    .findOne({ _id: itemId })
    // item в принципе не найден в БД по валидному айдишнику
    .orFail(() => {
      throw new NotFoundError(ITEM_NOT_FOUND)
    })
    .then((item) => {
        Item.findByIdAndDelete(itemId)
          .then((result) => res.status(200).send(result))
          .catch(next)
    })
    // айдишник невалиден
    .catch(next)
}

module.exports = { getItems, createItem, deleteItem }
