import { fetchAllTheEnsemble, fetchTheEnsembleById } from "../services/theensemble.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const getAllTheEnsemble = async (req, res, next) => {
    try {
        const data = await fetchAllTheEnsemble();
        res.status(200).json(new ApiResponse(true, "Data fetched successfully", data));
    } catch (error) {
        next(error);
    }
};

export const getTheEnsembleById = async (req, res, next) => {
    try {
        const data = await fetchTheEnsembleById(req.params.id);
        res.status(200).json(new ApiResponse(true, "Data fetched successfully", data));
    } catch (error) {
        next(error);
    }
};
