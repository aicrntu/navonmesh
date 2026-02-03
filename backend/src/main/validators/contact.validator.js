import ApiError from "../../utils/ApiError.js";

export const validateContact = (req, res, next) => {
  if (!req.body) {
    throw new ApiError(400, "Request body is missing");
  }
  const { name, number, email, message } = req.body;

  if (!name || !number || !email || !message) {
    throw new ApiError(400, "All field are required");
  }

  if (typeof email !== "string") {
    throw new ApiError(400, "Email must be a string");
  }

  if (!email.includes("@")) {
    throw new ApiError(400, "Invalid email");
  }

  next();
};
