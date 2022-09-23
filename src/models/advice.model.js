const { Schema, model } = require('mongoose')

const adviceSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  archiveDate: { type: Date, default: null }
}, {
  timestamps: true
})

const Advice = model('Advices', adviceSchema)

module.exports = Advice
