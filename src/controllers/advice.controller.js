// const Advice = require('../models/advice.model')
const adviceService = require('../services/advice.service')

const getAllAdvices = async (req, res) => {
  try {
    const allAdvices = await adviceService.getAdvices()
    res.status(200)
    res.json(allAdvices)
  } catch (err) {
    console.log(console.log(err))
  }
}

module.exports = { getAllAdvices }
