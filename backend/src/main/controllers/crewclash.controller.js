import ApiResponse from "../../utils/ApiResponse.js";
import { handleCrewClash } from "../services/crewclash.service.js";

export const submitCrewClash = async (req, res, next) => {
    try {
        const data = await handleCrewClash({
            ...req.body,
            video: req.files?.video ? req.files.video[0].path : null,
            paymentScreenshot: req.files?.paymentScreenshot ? req.files.paymentScreenshot[0].path : null,
        });

        res
            .status(201)
            .json(new ApiResponse(true, "CrewClash registration successful", data));
    } catch (error) {
        next(error);
    }
};
