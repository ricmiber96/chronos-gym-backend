require('./db/database')
require('dotenv').config()
const express = require('express')
const workoutRouter = require('./v1/routes/workout.routes')
const userRouter = require('./v1/routes/user.routes')
const advicesRouter = require('./v1/routes/advice.routes')
const bodyParser = require('body-parser')
const { swaggerDocs: V1SwaggerDocs } = require('./v1/swagger')

const app = express()
const PORT = 5001

app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send("<h2>It's Working!</h2>")
})
app.use('/api/v1/workouts', workoutRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/advices', advicesRouter)

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`)
  V1SwaggerDocs(app, PORT)
})
