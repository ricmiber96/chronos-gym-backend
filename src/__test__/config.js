const request = require('supertest')

const getAPI = (endpoint = '') => request(`http://localhost:5000/api/v1${endpoint}`)

module.exports = {
  getAPI
}
