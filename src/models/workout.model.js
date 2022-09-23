const { Schema, model } = require('mongoose')

const workoutSchema = new Schema({
  name: { type: String, required: true },
  mode: { type: String, required: true },
  equipment: { type: Array },
  exercises: { type: Array },
  trainerTips: { type: Array }
}, {
  timestamps: true
})

const Workout = model('Workouts', workoutSchema)
module.exports = Workout
