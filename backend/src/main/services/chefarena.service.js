import ChefArena from "../models/chefarena.model.js";
import ApiError from "../../utils/ApiError.js";

export const handleChefArena = async (data) => {
    const chefArena = await ChefArena.create(data);

    if (!chefArena) {
        throw new ApiError(500, "Failed to save the data");
    }
    return chefArena;
};
