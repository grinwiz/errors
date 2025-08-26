const { BaseError } = require('../core/BaseError');

class BadRequestError extends BaseError {
  constructor(message = 'Bad Request', data = {}) {
    super(message, { statusCode: 400, errorCode: 'BAD_REQUEST', data });
  }
};

module.exports = { BadRequestError };