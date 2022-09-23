const Advice = require('../models/advice.model')

const getAdvices = async () => {
  const advices = await Advice.find({})
  return advices
}

module.exports = { getAdvices }
