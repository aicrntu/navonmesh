import { handleRoboWarriorForm } from "../services/robowarrior.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const submitRoboWarrior = async (req, res, next) => {
  try {
    const data = await handleRoboWarriorForm({
      ...req.body,
      presentation: req.files?.presentation ? req.files.presentation[0].path : null,
      paymentScreenshot: req.files?.paymentScreenshot ? req.files.paymentScreenshot[0].path : null,
    });

    res
      .status(201)
      .json(new ApiResponse(true, "Form sumitted successfully", data));
  } catch (error) {
    next(error);
  }
};
