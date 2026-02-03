import ApiResponse from "../../utils/ApiResponse.js";
import { handleAdmad } from "../services/admad.service.js";

export const submitAdMad = async (req, res, next) => {
  try {
    const data = await handleAdmad({
      ...req.body,
      video: req.file?.path,
    });

    res
      .status(201)
      .json(new ApiResponse(true, "Form submitted successfull", data));
  } catch (error) {
    next(error);
  }
};
