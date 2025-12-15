export const successResponse = (res, statusCode = 200, message, data = null ) => {
   const response = {
    success: true,
    message,
  };
  if (data !== null) {
    response.data = data;
  }
  return res.status(statusCode).json(response);
};

export const errorResponse = (res, statusCode = 500, message, error = null) => {
  // pag construct han response object
  const response = {
    success: false,
    message,
  };
  // pag include han error details kon ada ngan development mode
  if (error !== null && process.env.NODE_ENV === "development") {
    response.error = error;
  }
  // pag return han response ha client
  return res.status(statusCode).json(response);
};

