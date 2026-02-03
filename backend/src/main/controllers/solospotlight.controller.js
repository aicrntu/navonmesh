import ApiResponse from "../../utils/ApiResponse.js";
import { handleSoloSpotlight } from "../services/solospotlight.service.js";

export const submitSoloSpotlight = async (req, res, next) => {
    try {
        const data = await handleSoloSpotlight({
            ...req.body,
            video: req.file?.path,
        });

        res
            .status(201)
            .json(new ApiResponse(true, "SoloSpotlight registration successful", data));
    } catch (error) {
        next(error);
    }
};
