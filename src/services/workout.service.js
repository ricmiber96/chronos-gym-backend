const { v4: uuid } = require('uuid')
const Workout = require('../db/workout')

const getAllWorkouts = (filterParameters) => {
  try {
    const allWorkouts = Workout.getAllWorkouts(filterParameters)
    return allWorkouts
  } catch (err) {
    throw new Error(err)
  }
}

const getOneWorkout = (workoutId) => {
  try {
    const workout = Workout.getOneWorkout(workoutId)
    return workout
  } catch (err) {
    throw new Error(err)
  }
}

const createNewWorkout = (newWorkout) => {
  const workoutInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
  }
  try {
    const createdWorkout = Workout.createNewWorkout(workoutInsert)
    return createdWorkout
  } catch (err) {
    throw new Error(err)
  }
}

const updateOneWorkout = (workoutId, changes) => {
  try {
    const updatedWorkout = Workout.updateOneWorkout(workoutId, changes)
    return updatedWorkout
  } catch (err) {
    throw new Error(err)
  }
}

const deleteOneWorkout = (workoutId) => {
  try {
    Workout.deleteOneWorkout(workoutId)
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
}
