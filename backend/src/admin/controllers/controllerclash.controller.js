import { fetchAllControllerClash, fetchControllerClashById } from "../services/controllerclash.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const getAllControllerClash = async (req, res, next) => {
    try {
        const data = await fetchAllControllerClash();
        res
            .status(200)
            .json(new ApiResponse(true, "Data fetched successfully", data));
    } catch (error) {
        next(error);
    }
};

export const getControllerClashById = async (req, res, next) => {
    try {
        const data = await fetchControllerClashById(req.params.id);
        res
            .status(200)
            .json(new ApiResponse(true, "Data fetched successfully", data));
    } catch (error) {
        next(error);
    }
};
