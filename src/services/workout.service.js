// const { v4: uuid } = require('uuid')
const Workout = require('../models/workout.model')
const { WEBSITE_URL, PORT, API_VERSION } = require('../configs/enviroment.config')

const getWorkouts = async (req, res) => {
  try {
    // Pagination
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 10
    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const totalWorkouts = await Workout.countDocuments().exec()
    const totalPages = Math.ceil(totalWorkouts / limit)

    // // SORT
    const sort = {}
    if (req.query.sortBy && req.query.OrderBy) {
      sort[req.query.sortBy] = req.query.OrderBy.toLowerCase() === 'desc' ? -1 : 1
    } else {
      sort.createdAt = -1
    }

    let filter = {}
    // // Search
    if (req.query.search) {
      filter = {
        $or: [
          { name: { $regex: req.query.search } },
          { mode: { $regex: req.query.search } },
          { equipment: { $regex: req.query.search } },
          { exercises: { $regex: req.query.search } }
        ]
      }
    }

    const workouts = await Workout
      .find(filter)
      .limit(limit)
      .skip(startIndex)
      .sort(sort)
      .exec()

    const resultWorkouts = workouts.map(workout => {
      return {
        workout,
        request: {
          type: 'Get',
          description: 'Get one product with the id',
          url: `${WEBSITE_URL}:${PORT}/api/${API_VERSION}/workouts/${workout._id}`
        }
      }
    })
    resultWorkouts.currentPage = {
      page,
      limit
    }
    return resultWorkouts
  } catch (err) {
    throw new Error(err)
  }
}

const getWorkoutById = async (id) => {
  try {
    return Workout.findById(id)
  } catch (err) {
    throw new Error(err)
  }
}

const createNewWorkout = async (newWorkout) => {
  try {
    const workoutsCreated = await Workout.create(newWorkout)
    return workoutsCreated
  } catch (err) {
    throw new Error(err)
  }
}

const updateWorkoutById = async (workoutId, updateBody) => {
  try {
    const workoutUpdated = await Workout.updateOne({ _id: workoutId }, updateBody)
    return workoutUpdated
  } catch (err) {
    throw new Error(err)
  }
}

const deleteOneWorkout = async (workoutId) => {
  try {
    await Workout.findByIdAndDelete(workoutId)
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  getWorkouts,
  getWorkoutById,
  createNewWorkout,
  updateWorkoutById,
  deleteOneWorkout
}
