import ApiResponse from "../../utils/ApiResponse.js";
import { handleTheEnsemble } from "../services/theensemble.service.js";

export const submitTheEnsemble = async (req, res, next) => {
    try {
        const data = await handleTheEnsemble({
            ...req.body,
            video: req.file?.path,
        });

        res
            .status(201)
            .json(new ApiResponse(true, "TheEnsemble registration successful", data));
    } catch (error) {
        next(error);
    }
};
