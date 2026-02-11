import ApiError from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) => {
  console.error("❌ HERE IS ERROR ==> ", err);

  const statusCode = err.statusCode || 500;
  const message =
    err instanceof ApiError ? err.message : "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
  });
};

export default errorHandler;
