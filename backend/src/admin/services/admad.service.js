import AdMad from "../../main/models/admad.model.js";
import ApiError from "../../utils/ApiError.js";

export const fetchAllAdMad = async (req, res, next) => {
  const data = await AdMad.find().sort({ createdAt: -1 });
  return data;
};

export const fetchAdMadById = async (req, res, next) => {
  const data = await AdMad.findById(id);

  if (!data) {
    throw new ApiError(404, "Data not found");
  }
  return data;
};
