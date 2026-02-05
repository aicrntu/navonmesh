import { handleControllerClashForm } from "../services/controllerclash.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const submitControllerClash = async (req, res, next) => {
    try {
        const data = await handleControllerClashForm({
            ...req.body,
            paymentScreenshot: req.file?.path,
        });

        res
            .status(201)
            .json(new ApiResponse(true, "Form submitted successfully", data));
    } catch (error) {
        next(error);
    }
};
