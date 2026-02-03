import ApiResponse from "../../utils/ApiResponse.js";
import { handleCrewClash } from "../services/crewclash.service.js";

export const submitCrewClash = async (req, res, next) => {
    try {
        const data = await handleCrewClash({
            ...req.body,
            video: req.file?.path,
        });

        res
            .status(201)
            .json(new ApiResponse(true, "CrewClash registration successful", data));
    } catch (error) {
        next(error);
    }
};
