const { BaseError } = require('../core/BaseError');

class UnauthorizedError extends BaseError {
  constructor(message = 'Unauthorized', data = {}) {
    super(message, { statusCode: 401, errorCode: 'UNAUTHORIZED', data });
  }
};

module.exports = { UnauthorizedError };