import ApiResponse from "../../utils/ApiResponse.js";
import { handleMicDrop } from "../services/micdrop.service.js";

export const submitMicDrop = async (req, res, next) => {
    try {
        const data = await handleMicDrop({
            ...req.body,
            video: req.files?.video ? req.files.video[0].path : null,
            paymentScreenshot: req.files?.paymentScreenshot ? req.files.paymentScreenshot[0].path : null,
        });

        res
            .status(201)
            .json(new ApiResponse(true, "MicDrop registration successful", data));
    } catch (error) {
        next(error);
    }
};
