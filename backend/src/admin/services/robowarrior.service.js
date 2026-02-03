import RoboWarrior from "../../main/models/robowarrior.model.js";
import ApiError from "../../utils/ApiError.js";

export const fetchAllRobo = async () => {
  const data = await RoboWarrior.find().sort({ createdAt: -1 });
  return data;
};

export const fetchRoboById = async (id) => {
  const robowarrior = await RoboWarrior.findById(id);

  if (!robowarrior) {
    throw new ApiError(404, "Data not found");
  }
  return robowarrior;
};
