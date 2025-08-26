const { BaseError } = require('./core/BaseError');
const { BadRequestError } = require('./errors/BadRequestError');
const { UnauthorizedError } = require('./errors/UnauthorizedError');
const { ForbiddenError } = require('./errors/ForbiddenError');
const { NotFoundError } = require('./errors/NotFoundError');
const { ConflictError } = require('./errors/ConflictError');
const { DownstreamError } = require('./errors/DownstreamError');
const { CustomError } = require('./errors/CustomError');

module.exports = {
  BaseError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
  DownstreamError,
  CustomError
};
