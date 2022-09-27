require('./db/database')
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const { swaggerDocs: V1SwaggerDocs } = require('./v1/swagger')
const workoutRouter = require('./v1/routes/workout.routes')
const userRouter = require('./v1/routes/user.routes')
const advicesRouter = require('./v1/routes/advice.routes')
const errorHandlerMiddleware = require('./middlewares/errors/error-handler')
const notFoundMiddleware = require('./middlewares/errors/not-found')

const app = express()
const PORT = process.env.PORT || 5000

// Logger for request
app.use(morgan('dev'))
app.use(cors())

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("<h2>It's Working!</h2>")
})

// Routes
app.use('/api/v1/workouts', workoutRouter)
app.use('/api/v1/users', userRouter)
app.use('/api/v1/advices', advicesRouter)

// Middlewares
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`)
  V1SwaggerDocs(app, PORT)
})
