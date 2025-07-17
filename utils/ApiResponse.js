class ApiResponse {
  constructor(statusCode, message, data = null, success = true) {
    this.statusCode = statusCode;
    this.message = message;
    this.success = success;
    if (data) this.data = data;
  }

  send(res) {
    return res.status(this.statusCode).json({
      success: this.success,
      message: this.message,
      ...(this.data !== undefined && { data: this.data }),
    });
  }
}

class PaginatedResponse extends ApiResponse {
  constructor(statusCode, message, data, pagination) {
    super(statusCode, message, data);
    this.pagination = pagination;
  }

  send(res) {
    return res.status(this.statusCode).json({
      success: this.success,
      message: this.message,
      data: this.data,
      pagination: this.pagination,
    });
  }
}

// example to send paginated response
const articles = [];
new PaginatedResponse(200, "Articles fetched", articles, {
  page: 1,
  limit: 10,
  total: 30,
});
module.exports = {
  ApiResponse,
  PaginatedResponse,
};
