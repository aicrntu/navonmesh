import BinaryBattle from "../models/binarybattle.model.js";
import ApiError from "../../utils/ApiError.js";

export const handleBinarybattle = async (data) => {
  const binarybattle = await BinaryBattle.create(data);

  if (!binarybattle) {
    throw new ApiError(500, "Failed to save Binary Battel data");
  }
  return binarybattle;
};
