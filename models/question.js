const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  question: {
    required: true,
    type: String
  },
  type: {
    required: true,
    type: String,
    enum: ['open', 'close', 'mixed']
  },
  requestable: {
    required: true,
    type: Boolean
  },
  filter: {
    required: true,
    type: String,
    enum: ['price', 'color', 'location', 'query', 'material', 'type']
  }
})

// itemSchema.pre('findOneAndUpdate', function(next) {
//   this.options.runValidators = true
//   next()
// })

module.exports = mongoose.model('question', questionSchema)
