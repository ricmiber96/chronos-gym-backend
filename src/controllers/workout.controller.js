const httpStatus = require('http-status')
const workoutService = require('../services/workout.service')
const { ApiError } = require('../utils/ApiError')

const getAllWorkouts = async (req, res) => {
  // const { mode, equipment, length, page, sort } = req.query
  try {
    // const filter = pick(req.query, ['name', 'role'])
    // const options = pick(req.query, ['sortBy', 'limit', 'page'])
    const allWorkouts = await workoutService.getWorkouts(req, res)
    res.json(allWorkouts)
  } catch (err) {
    res.status(err?.status || 500).send({ status: 'Failed', data: { error: err?.message || err } })
  }
}

const getWorkout = async (req, res) => {
  const workoutId = req.params.workoutId

  if (!workoutId) {
    res.status(400).send({ status: 'FAILED', data: { error: "Parameter ':workoutId' can not be empty" } })
  }
  try {
    const workout = await workoutService.getWorkoutById(workoutId)
    if (!workout) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Workout not found')
    }
    res.json({ status: 'OK', data: workout })
  } catch (err) {
    res.status(err?.status || 500).send({ status: 'FAIL', data: { error: err?.message || err } })
  }
}

const createWorkout = async (req, res) => {
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
    const createdWorkout = await workoutService.createNewWorkout(newWorkout)
    res.status(201).send({ status: 'Created', data: createdWorkout })
  } catch (err) {
    res.status(err?.status || 500).send({ status: 'Internal Server Error', data: err?.message || err })
  }
}

const updateWorkout = async (req, res) => {
  const body = req.body
  const workoutId = req.params.workoutId

  console.log(workoutId)
  if (!workoutId) {
    res.status(400).send({ status: 'Failed', data: { error: 'Parameter :id cannot be empty' } })
  }
  try {
    const updatedWorkout = await workoutService.updateWorkoutById(workoutId, body)
    res.send({ status: 'OK', data: updatedWorkout })
  } catch (err) {
    res.status(err?.status || 500).send({ status: 'Failed', data: { error: err?.message || err } })
  }
}

const deleteWorkout = async (req, res) => {
  const { params: { workoutId } } = req
  if (!workoutId) {
    res.status(400).send({ status: 'Failed', data: { error: 'Parameter :id is required' } })
  }
  try {
    await workoutService.deleteOneWorkout(workoutId)
    res.send({ status: 'OK' })
  } catch (err) {
    res.status(err?.status || 500).send({ status: 'Failed', data: { error: err?.message || err } })
  }
}

module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  updateWorkout,
  deleteWorkout
}
