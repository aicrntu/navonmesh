import ControllerClash from "../../main/models/controllerclash.model.js";
import ApiError from "../../utils/ApiError.js";

export const fetchAllControllerClash = async () => {
    const data = await ControllerClash.find().sort({ createdAt: -1 });
    return data;
};

export const fetchControllerClashById = async (id) => {
    const data = await ControllerClash.findById(id);

    if (!data) {
        throw new ApiError(404, "Data not found");
    }
    return data;
};
