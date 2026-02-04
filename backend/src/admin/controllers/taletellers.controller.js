import { fetchAllTaleTellers, fetchTaleTellersById } from "../services/taletellers.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const getAllTaleTellers = async (req, res, next) => {
    try {
        const data = await fetchAllTaleTellers();
        res.status(200).json(new ApiResponse(true, "Data fetched successfully", data));
    } catch (error) {
        next(error);
    }
};

export const getTaleTellersById = async (req, res, next) => {
    try {
        const data = await fetchTaleTellersById(req.params.id);
        res.status(200).json(new ApiResponse(true, "Data fetched successfully", data));
    } catch (error) {
        next(error);
    }
};
