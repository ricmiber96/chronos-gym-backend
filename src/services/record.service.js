const Records = require('../db/record')

const getRecordByWorkoutId = (workoutId) => {
  try {
    const record = Records.getOneRecord(workoutId)
    return record
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = { getRecordByWorkoutId }
