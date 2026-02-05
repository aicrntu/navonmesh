import ApiResponse from "../../utils/ApiResponse.js";
import { handleSoloSpotlight } from "../services/solospotlight.service.js";

export const submitSoloSpotlight = async (req, res, next) => {
    try {
        const data = await handleSoloSpotlight({
            ...req.body,
            video: req.files?.video ? req.files.video[0].path : null,
            paymentScreenshot: req.files?.paymentScreenshot ? req.files.paymentScreenshot[0].path : null,
        });

        res
            .status(201)
            .json(new ApiResponse(true, "SoloSpotlight registration successful", data));
    } catch (error) {
        next(error);
    }
};
