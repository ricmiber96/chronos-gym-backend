const { getAPI } = require('./config')
const mongoose = require('mongoose')
const api = getAPI('/workouts')
const Workout = require('../models/workout.model')
// If Jest error exceeds timeout

const initialWorkouts = [{
  name: 'Jumping (Not) Made Easy',
  mode: 'AMRAP 12',
  equipment: [
    'jump rope'
  ],
  exercises: [
    '10 burpees',
    '25 double-unders'
  ],
  trainerTips: [
    'Scale to do 50 single-unders, if double-unders are too difficult'
  ],
  _id: '8f8318f8-b869-4e9d-bb78-88010193563a',
  createdAt: '4/25/2022, 2:45:28 PM',
  updatedAt: '4/25/2022, 2:45:28 PM'
},
{
  name: 'Burpee Meters',
  mode: '3 Rounds For Time',
  equipment: [
    'Row Erg'
  ],
  exercises: [
    'Row 500 meters',
    '21 burpees',
    'Run 400 meters',
    'Rest 3 minutes'
  ],
  trainerTips: [
    'Go hard',
    'Note your time after the first run',
    'Try to hold your pace'
  ],
  _id: '0a5948af-5185-4266-8c4b-818889657e9d',
  createdAt: '4/25/2022, 2:48:53 PM',
  updatedAt: '4/25/2022, 2:48:53 PM'
}]

// beforeEach(async () => {
//   jest.useFakeTimers('legacy')
//   await Workout.deleteMany({})
//   const workout1 = new Workout(initialWorkouts[0])
//   await workout1.save()
//   const workout2 = new Workout(initialWorkouts[1])
//   await workout2.save()
// })

const createWorkout = async (workout) => {
  const response = await api.post('/').send(workout)
  return response
}

describe('Workouts', () => {
  // beforeEach(async () => {
  //   await Workout.deleteMany({})
  //   const workout1 = new Workout(initialWorkouts[0])
  //   await workout1.save()
  //   const workout2 = new Workout(initialWorkouts[1])
  //   await workout2.save()
  // })

  test('should create a new Workout', async () => {
    const result = await createWorkout(initialWorkouts[0])

    expect(result.status).toBe(201)
    expect(result.body.data).toHaveProperty('name')
    expect(result.body.status).toBe('Created')
  })

  test('workouts are returned as json', async () => {
    await api.get('/')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('there are same workouts like inital workouts array', async () => {
    const response = await api.get('/')
    expect(response.body).toHaveLength(1)
  })

  test('the first workout is about jumping', async () => {
    const response = await api.get('/')
    expect(response.body[0].workout.name).toBe('Jumping (Not) Made Easy')
  })
})

afterAll(() => {
  mongoose.connection.close()
})
