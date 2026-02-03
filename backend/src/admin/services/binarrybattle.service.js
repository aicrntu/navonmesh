import BinnayBattle from "../../main/models/binarybattle.model.js";
import ApiError from "../../utils/ApiError.js";

export const fetchAllBinarryBattle = async () => {
  const data = await BinnayBattle.find().sort({ createdAt: -1 });
  return data;
};

export const fetchBinarryBattleById = async (id) => {
  const data = await BinnayBattle.findById(id);

  if (!data) {
    throw new ApiError(404, "Data not found");
  }
  return data;
};
