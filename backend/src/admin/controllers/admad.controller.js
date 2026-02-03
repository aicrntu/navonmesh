import { fetchAllAdMad, fetchAdMadById } from "../services/admad.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const getAllAdMad = async (req, res, next) => {
  try {
    const data = await fetchAllAdMad(req, res, next);
    res
      .status(200)
      .json(new ApiResponse(true, "Data fetched successfully", data));
  } catch (error) {
    next(error);
  }
};

export const getAdMadById = async (req, res, next) => {
  try {
    const data = await fetchAdMadById(req.params.id);
    res
      .status(200)
      .json(new ApiResponse(true, "Data fetch successfully", data));
  } catch (error) {
    next(error);
  }
};
