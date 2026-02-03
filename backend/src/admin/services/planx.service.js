import Planx from "../../main/models/planx.model.js";
import ApiError from "../../utils/ApiError.js";

export const fetchAllPlanx = async () => {
  const data = await Planx.find().sort({ createdAt: -1 });
  return data;
};

export const fetchPlanxById = async (id) => {
  const planx = await Planx.findById(id);

  if (!planx) {
    throw new ApiError(404, "Planx not found");
  }
  return planx;
};
