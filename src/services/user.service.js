const User = require('../models/user.model')

const getUsers = async () => {
  const users = await User.find({})
  return users
}

module.exports = { getUsers }
