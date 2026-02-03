import { handleContactForm } from "../services/contact.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const submitContact = async (req, res, next) => {
  try {
    const data = await handleContactForm(req.body);

    res
      .status(201)
      .json(new ApiResponse(true, "Form submitted successfully", data));
  } catch (error) {
    next(error);
  }
};
