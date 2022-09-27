const createError = require('http-errors')

const notFoundMiddleware = (req, res, next) => {
  next(404, 'Not Found')
}

module.exports = notFoundMiddleware
