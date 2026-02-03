import { handlePlanxForm } from "../services/planx.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const submitPlanxForm = async (req, res, next) => {
  try {
    const data = await handlePlanxForm({
      ...req.body,
      presentation: req.file?.path,
    });

    res
      .status(201)
      .json(new ApiResponse(true, "Form submitted successfully", data));
  } catch (error) {
    next(error);
  }
};
