// Global error handler middleware for Express
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
};

module.exports = errorHandler;
