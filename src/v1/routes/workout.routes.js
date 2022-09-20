const express = require('express')
const apicache = require('apicache')
const workoutController = require('../../controllers/workout.controller')
const recordController = require('../../controllers/record.controller')

const router = express.Router()
const cache = apicache.middleware

/**
 * @openapi
 * /api/v1/workouts:
 *   get:
 *     tags:
 *       - Workouts
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.get('/', cache('2 minutes'), workoutController.getAllWorkouts)

router.get('/:workoutId', workoutController.getOneWorkout)

router.get('/:workoutId/records', recordController.getRecordByWorkoutId)

router.post('/', workoutController.createNewWorkout)

router.put('/:workoutId', workoutController.updateOneWorkout)

router.delete('/:workoutId', workoutController.deleteOneWorkout)

module.exports = router
