# @grinwiz/errors

A Node.js package for creating **consistent custom errors** for backend development.  
Supports standard HTTP errors, a base `BaseError` class, and fully **custom errors**.

---

## Features

- Standard HTTP errors: `BadRequestError`, `NotFoundError`, `UnauthorizedError`, etc.  
- Base `BaseError` for custom extensions.  
- `CustomError` for dynamic or one-off errors with any `statusCode` and `errorCode`.  
- Supports `data` metadata for debugging or logging.  
- Fully compatible with Express, Fastify, or any Node.js backend.

---

## Installation

```
npm install @grinwiz/errors
```

or

```
yarn add @grinwiz/errors
```

---

## Usage
```javascript
const { NotFoundError, BadRequestError, CustomError } = require('@grinwiz/errors);
```

### Standard HTTP Errors
```javascript
try {
  throw new NotFoundError("User not found", { userId: 123 })
} catch (err) {
  console.error(err)
}

Output:
{
  name: "NotFoundError",
  statusCode: 404,
  errorCode: "NOT_FOUND",
  message: "User not found",
  data: { userId: 123 }
}
```
---

### Custom Errors
```javascript
throw new CustomError("Payment required", 402, "PAYMENT_REQUIRED", { plan: "premium" })

Output:
{
  name: "CustomError",
  statusCode: 402,
  errorCode: "PAYMENT_REQUIRED",
  message: "Payment required",
  data: { plan: "premium" }
}
```
---

## Available Errors

- `BadRequestError` → `400`
- `UnauthorizedError` → `401`
- `ForbiddenError` → `403`
- `NotFoundError` → `404`
- `ConflictError` → `409`
- `InternalServerError` → `500`
- `CustomError` → _fully customizable_

---

## Extend and Customize

You can extend `BaseError` to create your own reusable error classes:
```javascript
const { BaseError } = require('@grinwiz/errors');

class MyCustomError extends BaseError {
  constructor(message, data = {}) {
    super(message, { statusCode: 418, errorCode: "I_AM_A_TEAPOT", data });
  }
}

throw new MyCustomError("I'm a teapot")
```
---

## License

MIT
