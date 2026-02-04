import MicDrop from "../../main/models/micdrop.model.js";
import ApiError from "../../utils/ApiError.js";

export const fetchAllMicDrop = async () => {
    const data = await MicDrop.find().sort({ createdAt: -1 });
    return data;
};

export const fetchMicDropById = async (id) => {
    const data = await MicDrop.findById(id);
    if (!data) throw new ApiError(404, "Data not found");
    return data;
};
