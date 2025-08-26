const { BaseError } = require('../core/BaseError');

class NotFoundError extends BaseError {
  constructor(message = 'Not Found', data = {}) {
    super(message, { statusCode: 404, errorCode: 'NOT_FOUND', data });
  }
};

module.exports = { NotFoundError };