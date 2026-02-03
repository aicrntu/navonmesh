import { fetchAllRobo, fetchRoboById } from "../services/robowarrior.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const getAllRobo = async (req, res, next) => {
  try {
    const data = await fetchAllRobo(req, res, next);
    res
      .status(200)
      .json(new ApiResponse(true, "Data fetch successfully", data));
  } catch (error) {
    next(error);
  }
};

export const getRoboById = async (req, res, next) => {
  try {
    const data = await fetchRoboById(req.params.id);
    res
      .status(200)
      .json(new ApiResponse(true, "Data fetch successfully", data));
  } catch (error) {
    next(error);
  }
};
