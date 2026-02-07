import BizaiQuiz from "../../main/models/bizaiquiz.model.js";
import ApiError from "../../utils/ApiError.js";

export const fetchAllBizaiQuiz = async () => {
    const data = await BizaiQuiz.find().sort({ createdAt: -1 });
    return data;
};

export const fetchBizaiQuizById = async (id) => {
    const data = await BizaiQuiz.findById(id);
    if (!data) throw new ApiError(404, "Data not found");
    return data;
};
