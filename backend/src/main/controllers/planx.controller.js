import { handlePlanxForm } from "../services/planx.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const submitPlanxForm = async (req, res, next) => {
  try {
    if (req.body.participants) {
      req.body.participants = JSON.parse(req.body.participants);
    }

    const data = await handlePlanxForm({
      ...req.body,
      presentation: req.files?.presentation ? req.files.presentation[0].path : null,
      paymentScreenshot: req.files?.paymentScreenshot ? req.files.paymentScreenshot[0].path : null,
    });

    res
      .status(201)
      .json(new ApiResponse(true, "Form submitted successfully", data));
  } catch (error) {
    next(error);
  }
};
