const mongoose = require('mongoose')
const getCurrentDate = require('../utils/currentDate')

const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: String,
  grade: Number,
  notes: String,
  date: {
    type: String,
    default: getCurrentDate(),
  },
})

schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Book', schema)
