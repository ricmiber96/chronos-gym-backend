const DB = require('./db.json')

const getOneRecord = (workoutId) => {
  try {
    const record = DB.records.filter((record) => record.workout === workoutId)
    if (!record) {
      const errorMessage = { status: 400, message: `Can not find record of workout with id ${workoutId}` }
      throw new Error(errorMessage)
    }
    return record
  } catch (err) {
    const errorMessage = { status: err?.status || 500, message: err?.message || err }
    throw new Error(errorMessage)
  }
}

module.exports = { getOneRecord }
