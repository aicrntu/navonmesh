import SoloSpotlight from "../../main/models/solospotlight.model.js";
import ApiError from "../../utils/ApiError.js";

export const fetchAllSoloSpotlight = async () => {
    const data = await SoloSpotlight.find().sort({ createdAt: -1 });
    return data;
};

export const fetchSoloSpotlightById = async (id) => {
    const data = await SoloSpotlight.findById(id);
    if (!data) throw new ApiError(404, "Data not found");
    return data;
};
