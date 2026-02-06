import ApiError from "../../utils/ApiError.js";

export const validateRoboWarrior = (req, res, next) => {
  if (!req.body) {
    throw new ApiError(400, "Request body is missing");
  }

  const { email, category } = req.body;

  if (!category || !["Robo Fight", "Robo Race"].includes(category)) {
    throw new ApiError(400, "Valid category is required (Robo Fight or Robo Race)");
  }

  if (typeof email !== "string") {
    throw new ApiError(400, "Email must be a string");
  }

  if (!email.includes("@")) {
    throw new ApiError(400, "Invalid email");
  }

  next();
};
