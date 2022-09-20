const recordService = require('../services/record.service')

const getRecordByWorkoutId = (req, res) => {
  const { params: { workoutId } } = req
  try {
    if (!workoutId) {
      res.status(404).send({ status: 'Failed', data: `Workout with id: ${workoutId} not found` })
    }
    const record = recordService.getRecordByWorkoutId(workoutId)
    res.send({ status: 'Success', data: record })
  } catch (err) {

  }
}

module.exports = { getRecordByWorkoutId }
