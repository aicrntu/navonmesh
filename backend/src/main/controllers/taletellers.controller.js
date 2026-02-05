import ApiResponse from "../../utils/ApiResponse.js";
import { handleTaleTellers } from "../services/taletellers.service.js";

export const submitTaleTellers = async (req, res, next) => {
    try {
        const data = await handleTaleTellers({
            ...req.body,
            video: req.files?.video ? req.files.video[0].path : null,
            paymentScreenshot: req.files?.paymentScreenshot ? req.files.paymentScreenshot[0].path : null,
        });

        res
            .status(201)
            .json(new ApiResponse(true, "TaleTellers registration successful", data));
    } catch (error) {
        next(error);
    }
};
