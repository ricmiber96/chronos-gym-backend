const userService = require('../services/user.service')

const getAllUsers = async (req, res) => {
  try {
    // const allUsers = await userService.getUsers()
    const allUsers = await userService.getUsers()
    res.status(200)
    res.json(allUsers)
  } catch (err) {
    res.status(err?.status || 500).send({ status: 'Failed', data: { error: err?.message || err } })
  }
}

module.exports = { getAllUsers }
