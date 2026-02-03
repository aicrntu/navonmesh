import TaleTellers from "../models/taletellers.model.js";
import ApiError from "../../utils/ApiError.js";

export const handleTaleTellers = async (data) => {
    const taleTellers = await TaleTellers.create(data);

    if (!taleTellers) {
        throw new ApiError(500, "Failed to save the data");
    }
    return taleTellers;
};
