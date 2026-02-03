import SoloSpotlight from "../models/solospotlight.model.js";
import ApiError from "../../utils/ApiError.js";

export const handleSoloSpotlight = async (data) => {
    const soloSpotlight = await SoloSpotlight.create(data);

    if (!soloSpotlight) {
        throw new ApiError(500, "Failed to save the data");
    }
    return soloSpotlight;
};
