import MicDrop from "../models/micdrop.model.js";
import ApiError from "../../utils/ApiError.js";

export const handleMicDrop = async (data) => {
    const micDrop = await MicDrop.create(data);

    if (!micDrop) {
        throw new ApiError(500, "Failed to save the data");
    }
    return micDrop;
};
