import { fetchAllBizaiQuiz, fetchBizaiQuizById } from "../services/bizaiquiz.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const getAllBizaiQuiz = async (req, res, next) => {
    try {
        const data = await fetchAllBizaiQuiz();
        res.status(200).json(new ApiResponse(true, "Data fetched successfully", data));
    } catch (error) {
        next(error);
    }
};

export const getBizaiQuizById = async (req, res, next) => {
    try {
        const data = await fetchBizaiQuizById(req.params.id);
        res.status(200).json(new ApiResponse(true, "Data fetched successfully", data));
    } catch (error) {
        next(error);
    }
};
