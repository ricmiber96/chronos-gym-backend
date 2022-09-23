const mongoose = require('mongoose')
const MONGO_DB_URI = process.env.MONGO_DB_URI || 'mongodb://mongo/ChronosDB'

mongoose.connect(MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(db => console.log(`Server is connected to ${db.connection.name}`))
  .catch(err => console.error(err))

process.on('uncaughtException', () => {
  mongoose.connection.close()
})
