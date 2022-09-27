require('dotenv').config()
const mongoose = require('mongoose')
const { NODE_ENV, MONGO_DB_URI_TEST, MONGO_DB_URI } = process.env

const connectionString = NODE_ENV === 'test'
  ? MONGO_DB_URI_TEST
  : MONGO_DB_URI

mongoose.connect(MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log(`Server is connected to ${db.connection.name}`))
  .catch(err => console.error(err))

process.on('uncaughtException', () => {
  mongoose.connection.close()
})
