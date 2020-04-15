const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const filterSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
    enum: ['price', 'color', 'location', 'query', 'material', 'type']
  },
  order: {
    type: Number
  }
})

filterSchema.plugin(AutoIncrement, {id:'order_seq',inc_field: 'order'});

module.exports = mongoose.model('filter', filterSchema)
