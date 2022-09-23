const express = require('express')
// const apicache = require('apicache')
// const Workout = require('../models/workout.model')
const { getAllWorkouts, getWorkout, createWorkout, updateWorkout, deleteWorkout } = require('../../controllers/workout.controller')
const recordController = require('../../controllers/record.controller')
// const workoutMiddleware = require('../../middlewares/sort-filter-pagination/workout.middleware')

const router = express.Router()
// const cache = apicache.middleware

router.get('/', getAllWorkouts)

router.get('/:workoutId', getWorkout)

router.get('/:workoutId/records', recordController.getRecordByWorkoutId)

router.post('/', createWorkout)

router.put('/:workoutId', updateWorkout)

router.delete('/:workoutId', deleteWorkout)

module.exports = router
