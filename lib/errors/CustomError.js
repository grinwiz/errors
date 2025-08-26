const { BaseError } = require('../core/BaseError');

class CustomError extends BaseError {
  constructor(message = 'Unauthorized', statusCode = 500, errorCode = 'CUSTOM_ERROR', data = {}) {
    super(message, { statusCode, errorCode, data });
  }
};

module.exports = { CustomError };