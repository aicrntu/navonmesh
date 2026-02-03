import {
  fetchAllInnomaker,
  fetchInnomakerById,
} from "../services/innomaker.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const getAllInnomaker = async (req, res, next) => {
  try {
    const innomaker = await fetchAllInnomaker(req, res, next);

    res
      .status(200)
      .json(new ApiResponse(true, "All data fetch successfully", innomaker));
  } catch (error) {
    next(error);
  }
};

export const getInnomakerById = async (req, res, next) => {
  try {
    const data = await fetchInnomakerById(req.params.id);

    res
      .status(200)
      .json(new ApiResponse(true, "Data fetch successfully", data));
  } catch (error) {
    next(error);
  }
};
