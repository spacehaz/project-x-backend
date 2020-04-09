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
  }
})

// itemSchema.pre('findOneAndUpdate', function(next) {
//   this.options.runValidators = true
//   next()
// })

module.exports = mongoose.model('question', questionSchema)
