const express = require('express')
const { getAllAdvices } = require('../../controllers/advice.controller')

const advicesRouter = express.Router()

advicesRouter.get('/', getAllAdvices)
// advicesRouter.post('/api/news', createAdvices)
// advicesRouter.put('/api/archived/:id', updateAdvices)
// advicesRouter.delete('/api/news/:id', deleteAdvices)

module.exports = advicesRouter
