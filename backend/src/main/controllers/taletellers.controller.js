import ApiResponse from "../../utils/ApiResponse.js";
import { handleTaleTellers } from "../services/taletellers.service.js";

export const submitTaleTellers = async (req, res, next) => {
    try {
        const data = await handleTaleTellers({
            ...req.body,
            video: req.file?.path,
        });

        res
            .status(201)
            .json(new ApiResponse(true, "TaleTellers registration successful", data));
    } catch (error) {
        next(error);
    }
};
