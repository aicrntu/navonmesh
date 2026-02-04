import { fetchAllCrewClash, fetchCrewClashById } from "../services/crewclash.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const getAllCrewClash = async (req, res, next) => {
    try {
        const data = await fetchAllCrewClash();
        res.status(200).json(new ApiResponse(true, "Data fetched successfully", data));
    } catch (error) {
        next(error);
    }
};

export const getCrewClashById = async (req, res, next) => {
    try {
        const data = await fetchCrewClashById(req.params.id);
        res.status(200).json(new ApiResponse(true, "Data fetched successfully", data));
    } catch (error) {
        next(error);
    }
};
