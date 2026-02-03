import ApiError from "../../utils/ApiError.js";

export const validateCreateAdmin = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  if (typeof password !== "string" || password.length < 6) {
    throw new ApiError(400, "Password must be at least 6 characters");
  }

  next();
};
