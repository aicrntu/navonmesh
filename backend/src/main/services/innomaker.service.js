import Innomaker from "../models/innomaker.model.js";
import ApiError from "../../utils/ApiError.js";

export const handleInnomakerForm = async (data) => {
    const innomaker = await Innomaker.create(data);

    if(!innomaker){
        throw new ApiError(500, "Failed to save the innomaker form");
    }

    return innomaker;
}