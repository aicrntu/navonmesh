import { fetchAllPlanx } from "../services/planx.service.js";
import { fetchPlanxById } from "../services/planx.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const getAllPlanx = async (req, res, next) => {
  try {
    const planxForm = await fetchAllPlanx(req, res, next);

    res
      .status(200)
      .json(new ApiResponse(true, "PlanX data fetch successfully", planxForm));
  } catch (error) {
    next(error);
  }
};

export const getPlanxById = async (req, res, next) => {
  try {
    const data = await fetchPlanxById(req.params.id);

    res
      .status(200)
      .json(new ApiResponse(true, "PlanX data fetch by ID successfully", data));
  } catch (error) {
    next(error);
  }
};
