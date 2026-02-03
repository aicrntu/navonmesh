import { handleInnomakerForm } from "../services/innomaker.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const submitInnomaker = async (req, res, next) => {
  try {
    const data = await handleInnomakerForm({
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
