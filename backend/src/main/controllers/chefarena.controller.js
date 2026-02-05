import ApiResponse from "../../utils/ApiResponse.js";
import { handleChefArena } from "../services/chefarena.service.js";

export const submitChefArena = async (req, res, next) => {
    try {
        const data = await handleChefArena({
            ...req.body,
            paymentScreenshot: req.file?.path,
        });

        res
            .status(201)
            .json(new ApiResponse(true, "ChefArena registration successful", data));
    } catch (error) {
        next(error);
    }
};
