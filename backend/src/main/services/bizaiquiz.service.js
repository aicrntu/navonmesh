import BizaiQuiz from "../models/bizaiquiz.model.js";
import ApiError from "../../utils/ApiError.js";

export const handleBizaiQuiz = async (data) => {
    const bizaiQuiz = await BizaiQuiz.create(data);

    if (!bizaiQuiz) {
        throw new ApiError(500, "Failed to save the data");
    }
    return bizaiQuiz;
};
