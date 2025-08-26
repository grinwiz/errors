class BaseError extends Error {
  constructor(message, { statusCode = 500, errorCode = 'UNKNOWN_ERROR', data = {} } = {}) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.data = data;
    Error.captureStackTrace?.(this, this.constructor);
  }
};

module.exports = { BaseError };