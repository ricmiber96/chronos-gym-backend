const express = require('express')
const { getAllWorkouts, getWorkout, createWorkout, updateWorkout, deleteWorkout } = require('../../controllers/workout.controller')
const recordController = require('../../controllers/record.controller')

const router = express.Router()

router.get('/', getAllWorkouts)

router.get('/:workoutId', getWorkout)

router.get('/:workoutId/records', recordController.getRecordByWorkoutId)

router.post('/', createWorkout)

router.put('/:workoutId', updateWorkout)

router.delete('/:workoutId', deleteWorkout)

module.exports = router
