const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
      name: String,
      //documento: String,
      estrela: Number,
      approved: Boolean,
})

module.exports = Person