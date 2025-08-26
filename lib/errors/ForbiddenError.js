const { BaseError } = require('../core/BaseError');

class ForbiddenError extends BaseError {
  constructor(message = 'Forbidden', data = {}) {
    super(message, { statusCode: 403, errorCode: 'FORBIDDEN', data });
  }
};

module.exports = { ForbiddenError };