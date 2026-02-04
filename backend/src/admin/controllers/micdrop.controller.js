import { fetchAllMicDrop, fetchMicDropById } from "../services/micdrop.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const getAllMicDrop = async (req, res, next) => {
    try {
        const data = await fetchAllMicDrop();
        res.status(200).json(new ApiResponse(true, "Data fetched successfully", data));
    } catch (error) {
        next(error);
    }
};

export const getMicDropById = async (req, res, next) => {
    try {
        const data = await fetchMicDropById(req.params.id);
        res.status(200).json(new ApiResponse(true, "Data fetched successfully", data));
    } catch (error) {
        next(error);
    }
};
