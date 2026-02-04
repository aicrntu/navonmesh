import { fetchAllChefArena, fetchChefArenaById } from "../services/chefarena.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const getAllChefArena = async (req, res, next) => {
    try {
        const data = await fetchAllChefArena(req, res, next);
        res
            .status(200)
            .json(new ApiResponse(true, "Data fetched successfully", data));
    } catch (error) {
        next(error);
    }
};

export const getChefArenaById = async (req, res, next) => {
    try {
        const data = await fetchChefArenaById(req.params.id);
        res
            .status(200)
            .json(new ApiResponse(true, "Data fetched successfully", data));
    } catch (error) {
        next(error);
    }
};
