import { fetchAllBinarryBattle, fetchBinarryBattleById } from "../services/binarrybattle.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const getAllBinarryBattle = async (req, res, next) => {
  try {
    const data = await fetchAllBinarryBattle(req, res, next);
    res
      .status(200)
      .json(new ApiResponse(true, "Data fetched successfully", data));
  } catch (error) {
    next(error);
  }
};

export const getBinarryBattleById = async (req, res, next) => {
  try {
    const data = await fetchBinarryBattleById(req.params.id);
    res
      .status(200)
      .json(new ApiResponse(true, "Data fetch successfully", data));
  } catch (error) {
    next(error);
  }
};
