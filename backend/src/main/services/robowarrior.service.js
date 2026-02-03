import ApiError from "../../utils/ApiError.js";
import RoboWarrior from "../models/robowarrior.model.js";

export const handleRoboWarriorForm = async (data) => {
  const roboWarrior = RoboWarrior.create(data);

  if (!roboWarrior) {
    throw new ApiError(500, "Failed to save the PlanX Form");
  }
  return roboWarrior;
};
