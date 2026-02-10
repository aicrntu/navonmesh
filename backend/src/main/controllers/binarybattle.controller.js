import { handleBinarybattle } from "../services/binarybattle.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const submitBinarybattle = async (req, res, next) => {
  try {
    const data = await handleBinarybattle({
      ...req.body,
      project: req.files?.project ? req.files.project[0].path : null,
      // paymentScreenshot: req.files?.paymentScreenshot ? req.files.paymentScreenshot[0].path : null,
    });

    res
      .status(201)
      .json(new ApiResponse(true, "Form submitted successfully", data));
  } catch (error) {
    next(error);
  }
};
