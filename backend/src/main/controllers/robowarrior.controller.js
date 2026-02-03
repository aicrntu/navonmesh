import { handleRoboWarriorForm } from "../services/robowarrior.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const submitRoboWarrior = async (req, res, next) => {
  try {
    const data = await handleRoboWarriorForm({
      ...req.body,
      presentation: req.file?.path,
    });

    res
      .status(201)
      .json(new ApiResponse(true, "Form sumitted successfully", data));
  } catch (error) {
    next(error);
  }
};
