import ApiError from "../utils/ApiError.js";

const roleMiddleware = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      throw new ApiError(403, "Access denied");
    }
    next();
  };
};

export default roleMiddleware;
