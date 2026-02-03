import Innomaker from "../../main/models/innomaker.model.js";
import ApiError from "../../utils/ApiError.js";

export const fetchAllInnomaker = async () => {
  const data = await Innomaker.find().sort({ createdAt: -1 });
  return data;
};

export const fetchInnomakerById = async (id) => {
  const innomaker = await Innomaker.findById(id);

  if (!innomaker) {
    throw new ApiError(404, "Innomaker not found");
  }
  return innomaker;
};
