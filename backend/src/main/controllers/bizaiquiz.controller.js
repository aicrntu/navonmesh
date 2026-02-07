import ApiResponse from "../../utils/ApiResponse.js";
import { handleBizaiQuiz } from "../services/bizaiquiz.service.js";

export const submitBizaiQuiz = async (req, res, next) => {
    try {
        // Parse teamMembers if it's sent as a string (from FormData)
        let teamMembers = [];
        if (req.body.teamMembers) {
            try {
                teamMembers = JSON.parse(req.body.teamMembers);
            } catch (e) {
                teamMembers = req.body.teamMembers;
            }
        }

        const data = await handleBizaiQuiz({
            ...req.body,
            teamMembers,
            paymentScreenshot: req.files?.paymentScreenshot ? req.files.paymentScreenshot[0].path : null,
        });

        res
            .status(201)
            .json(new ApiResponse(true, "Bizai Quiz registration successful", data));
    } catch (error) {
        next(error);
    }
};
