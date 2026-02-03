import ApiResponse from "../../utils/ApiResponse.js";
import { handleMicDrop } from "../services/micdrop.service.js";

export const submitMicDrop = async (req, res, next) => {
    try {
        const data = await handleMicDrop({
            ...req.body,
            video: req.file?.path,
        });

        res
            .status(201)
            .json(new ApiResponse(true, "MicDrop registration successful", data));
    } catch (error) {
        next(error);
    }
};
