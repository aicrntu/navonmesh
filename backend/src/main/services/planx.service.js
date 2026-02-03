import Planx from "../models/planx.model.js";
import ApiError from "../../utils/ApiError.js";

export const handlePlanxForm = async (data) => {
  const planx = await Planx.create(data);

  if (!planx) {
    throw new ApiError(500, "Failed to save the PlanX Form");
  }

  return planx;
};
