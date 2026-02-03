import AdMad from "../models/admad.model.js";
import ApiError from "../../utils/ApiError.js";

export const handleAdmad = async (data) => {
  const admad = await AdMad.create(data);

  if (!admad) {
    throw new ApiError(500, "Failed to save the data");
  }
  return admad;
};
