import ApiError from "../../utils/ApiError.js";

export const validateBinarybattle = (req, res, next) => {
  if (!req.body) {
    throw new ApiError(400, "Request body is missing");
  }

  const { email } = req.body;

  if (typeof email !== "string") {
    throw new ApiError(400, "Email must be a string");
  }

  if (!email.includes("@")) {
    throw new ApiError(400, "Invalid email");
  }

  next();
};
