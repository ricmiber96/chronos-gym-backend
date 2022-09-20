const workoutService = require('../services/workout.service')

const getAllWorkouts = (req, res) => {
  const { mode, equipment, length, page, sort } = req.query
  try {
    const allWorkouts = workoutService.getAllWorkouts({ mode, equipment, length, page, sort })
    res.send({ status: 'OK', data: allWorkouts })
  } catch (err) {
    res.status(err?.status || 500).send({ status: 'Failed', data: { error: err?.message || err } })
  }
}

const getOneWorkout = (req, res) => {
  const { params: { workoutId } } = req
  if (!workoutId) {
    res.status(400).send({ status: 'FAILED', data: { error: "Parameter ':workoutId' can not be empty" } })
  }
  try {
    const workout = workoutService.getOneWorkout(workoutId)
    res.send({ status: 'OK', data: workout })
  } catch (err) {
    res.status(err?.status || 500).send({ status: 'FAIL', data: { error: err?.message || err } })
  }
}

const createNewWorkout = (req, res) => {
  const { body } = req

  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    res.status(400).send({
      status: 'Failed',
      data: {
        error: 'One field of the form is empty.'
      }
    })
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips
  }

  try {
    const createdWorkout = workoutService.createNewWorkout(newWorkout)
    res.status(201).send({ status: 'Created', data: createdWorkout })
  } catch (err) {
    res.status(err?.status || 500).send({ status: 'Internal Server Error', data: err?.message || err })
  }
}

const updateOneWorkout = (req, res) => {
  const { body, params: { workoutId } } = req
  if (!workoutId) {
    res.status(400).send({ status: 'Failed', data: { error: 'Parameter :id cannot be empty' } })
  }
  try {
    const updatedWorkout = workoutService.updateOneWorkout(workoutId, body)
    res.send({ status: 'OK', data: updatedWorkout })
  } catch (err) {
    res.status(err?.status || 500).send({ status: 'Failed', data: { error: err?.message || err } })
  }
}

const deleteOneWorkout = (req, res) => {
  const { params: { workId } } = req
  if (!workId) {
    res.status(400).send({ status: 'Failed', data: { error: 'Parameter :id is required' } })
  }
  try {
    workoutService.deleteOneWorkout(workId)
    res.status(204).send({ status: 'OK' })
  } catch (err) {
    res.status(err?.status || 500).send({ status: 'Failed', data: { error: err?.message || err } })
  }
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
}
