import TaleTellers from "../../main/models/taletellers.model.js";
import ApiError from "../../utils/ApiError.js";

export const fetchAllTaleTellers = async () => {
    const data = await TaleTellers.find().sort({ createdAt: -1 });
    return data;
};

export const fetchTaleTellersById = async (id) => {
    const data = await TaleTellers.findById(id);
    if (!data) throw new ApiError(404, "Data not found");
    return data;
};
