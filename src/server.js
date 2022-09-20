const express = require('express')
const workoutRouter = require('./v1/routes/workout.routes')
const bodyParser = require('body-parser')
const { swaggerDocs: V1SwaggerDocs } = require('./v1/swagger')

const app = express()
const PORT = process.env.PORT || 5001

app.use(bodyParser.json())
app.use('/api/v1/workouts', workoutRouter)

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`)
  V1SwaggerDocs(app, PORT)
})
