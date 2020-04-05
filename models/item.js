const mongoose = require('mongoose')
const validator = require('validator')
const { INVALID_LINK } = require('../configs/constants')

const itemSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String
  },
  link: {
    required: true,
    type: String,
    select: false
  }
})

itemSchema.path('link').validate(validator.isURL, INVALID_LINK)

// itemSchema.pre('findOneAndUpdate', function(next) {
//   this.options.runValidators = true
//   next()
// })

module.exports = mongoose.model('item', itemSchema)
