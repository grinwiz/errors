const { BaseError } = require('../core/BaseError');

class ConflictError extends BaseError {
  constructor(message = 'Conflict', data = {}) {
    super(message, { statusCode: 409, errorCode: 'CONFLICT', data });
  }
};

module.exports = { ConflictError };