const CustomAPIError = require('./error')
const BadRequestError = require('./bad-request')
const UnauthenticatedError = require('./unauthenticated')

module.exports = {
  CustomAPIError,
  BadRequestError,
  UnauthenticatedError,
}