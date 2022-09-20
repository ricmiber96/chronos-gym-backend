const DB = require('./db.json')
const { saveDataFile } = require('./utils')

const getAllWorkouts = (filterParameters) => {
  const length = 2
  try {
    let workouts = DB.workouts
    if (filterParameters.mode) {
      return DB.workouts.filter((workout) => workout.mode.toLowerCase().includes(filterParameters.mode.toLowerCase()))
    }
    if (filterParameters.equipment) {
      return DB.workouts.filter((workout) => workout.equipment.includes(filterParameters.equipment))
    }
    if (filterParameters.sort) {
      const sortParameters = filterParameters.sort.replace('-', '')
      switch (sortParameters) {
        case 'createdAt':
          workouts = DB.workouts.sort((firstWorkout, secondWorkout) => firstWorkout.createdAt - secondWorkout.createdAt)
          break
        case 'updatedAt':
          workouts = DB.workouts.sort((firstWorkout, secondWorkout) => firstWorkout.updatedAt - secondWorkout.updatedAt)
          break
      }
    }
    if (filterParameters.length && filterParameters.length < DB.workouts.length) {
      workouts = workouts.slice(0, filterParameters.length)
    }
    if (filterParameters.page && filterParameters.page * length > workouts.length) {
      throw new Error({
        status: 400,
        message: `Error on pagination page ${filterParameters.page}`
      })
    }
    if (filterParameters.page && filterParameters.page * length < workouts.length) {
      const firstElement = filterParameters.page ? filterParameters.page * length : 0
      const lastElement = firstElement + length < workouts.length ? firstElement + length : workouts.length
      return DB.workouts.slice(firstElement, lastElement)
    }

    return workouts
  } catch (err) {
    const errorMessage = { status: 500, message: err }
    throw new Error(errorMessage)
  }
}

const getOneWorkout = (workoutId) => {
  try {
    const workout = DB.workouts.find((workout) => workout.id === workoutId)
    if (!workout) {
      throw new Error({
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`
      })
    }
    return workout
  } catch (err) {
    const errorMessage = JSON.stringify({ status: 500, message: err })
    throw new Error(errorMessage)
  }
}

const createNewWorkout = (newWorkout) => {
  const isOnDatabase = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1
  if (isOnDatabase) {
    const err = {
      status: 400,
      message: `Workout whit the name ${newWorkout.name} is on the database`
    }
    throw new Error(err)
  }
  try {
    DB.workouts.push(newWorkout)
    saveDataFile(DB.workouts)
    return newWorkout
  } catch (error) {
    const err = { status: 500, message: error.message || error }
    throw new Error(err)
  }
}

const updateOneWorkout = (workoutId, changes) => {
  try {
    const indexForUpdate = DB.workouts.findIndex((workout) => workout.id === workoutId)
    if (indexForUpdate === -1) {
      throw new Error({
        status: 400,
        message: `Workout with the name '${changes.name}' already exists`
      })
    }
    const updateWorkout = {
      ...DB.workouts[indexForUpdate],
      ...changes,
      updateAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
    }
    DB.workouts[indexForUpdate] = updateWorkout
    saveDataFile(DB.workouts[indexForUpdate])
    return updateWorkout
  } catch (err) {
    const errorMessage = { status: err?.status || 500, message: err?.message || err }
    throw new Error(errorMessage)
  }
}

const deleteOneWorkout = (workoutId) => {
  try {
    const indexOfDeleteWorkout = DB.workouts.indexOf((workout) => workout.id === workoutId)
    if (indexOfDeleteWorkout === -1) {
      const errorMessage = { status: 400, message: `Can't find workout with the id '${workoutId}'` }
      throw new Error(errorMessage)
    }
    DB.workouts.splice(indexOfDeleteWorkout, 1)
    saveDataFile(DB)
  } catch (err) {
    const errorMessage = { status: err?.status || 500, message: err?.message || err }
    throw new Error(errorMessage)
  }
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
}
