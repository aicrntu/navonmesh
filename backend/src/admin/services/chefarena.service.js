import ChefArena from "../../main/models/chefarena.model.js";
import ApiError from "../../utils/ApiError.js";

export const fetchAllChefArena = async () => {
    const data = await ChefArena.find().sort({ createdAt: -1 });
    return data;
};

export const fetchChefArenaById = async (id) => {
    const data = await ChefArena.findById(id);

    if (!data) {
        throw new ApiError(404, "Data not found");
    }
    return data;
};
