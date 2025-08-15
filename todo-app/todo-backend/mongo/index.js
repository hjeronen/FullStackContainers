const mongoose = require('mongoose')
const Todo = require('./models/Todo')
const { MONGO_URL } = require('../util/config')

console.log('Connecting to MongoDB...')
console.log(MONGO_URL)

if (MONGO_URL && !mongoose.connection.readyState) {
  mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  console.log('Connected to MongoDB')
} else {
  console.error('MongoDB connection URL is not defined or already connected')
}

module.exports = {
  Todo
}
