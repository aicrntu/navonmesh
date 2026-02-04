import { fetchAllSoloSpotlight, fetchSoloSpotlightById } from "../services/solospotlight.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const getAllSoloSpotlight = async (req, res, next) => {
    try {
        const data = await fetchAllSoloSpotlight();
        res.status(200).json(new ApiResponse(true, "Data fetched successfully", data));
    } catch (error) {
        next(error);
    }
};

export const getSoloSpotlightById = async (req, res, next) => {
    try {
        const data = await fetchSoloSpotlightById(req.params.id);
        res.status(200).json(new ApiResponse(true, "Data fetched successfully", data));
    } catch (error) {
        next(error);
    }
};
