import ApiResponse from "../../utils/ApiResponse.js";
import { handleAdmad } from "../services/admad.service.js";

export const submitAdMad = async (req, res, next) => {
  try {
    const data = await handleAdmad({
      ...req.body,
      video: req.files?.video ? req.files.video[0].path : null,
      paymentScreenshot: req.files?.paymentScreenshot ? req.files.paymentScreenshot[0].path : null,
    });

    res
      .status(201)
      .json(new ApiResponse(true, "Form submitted successfull", data));
  } catch (error) {
    next(error);
  }
};
