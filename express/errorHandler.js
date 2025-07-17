// Global error handler middleware for Express
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";
  const message = err.message || "Something went wrong";
  res.status(statusCode).json({
    success: false,
    status,
    message,
  });
};

module.exports = errorHandler;
