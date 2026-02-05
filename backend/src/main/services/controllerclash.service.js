import ApiError from "../../utils/ApiError.js";
import ControllerClash from "../models/controllerclash.model.js";

export const handleControllerClashForm = async (data) => {
    const controllerClash = await ControllerClash.create(data);

    if (!controllerClash) {
        throw new ApiError(500, "Failed to save the Controller Clash Form");
    }
    return controllerClash;
};
