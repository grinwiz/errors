const { BaseError } = require('../core/BaseError');

class DownstreamError extends BaseError {
  constructor(message = 'Downstream Error', data = {}) {
    super(message, { statusCode: 500, errorCode: 'DOWNSTREAM_ERROR', data });
  }
};

module.exports = { DownstreamError };