import { fetchAllContact, fetchContactById } from "../services/contact.service.js";
import ApiResponse from "../../utils/ApiResponse.js";

export const getAllContact = async (req, res, next) => {
  try {
    const data = await fetchAllContact(req, res, next);
    res
      .status(200)
      .json(new ApiResponse(true, "Contact data fetched successfully", data));
  } catch (error) {
    next(error);
  }
};

export const getContactById = async (req, res, next) => {
  try {
    const data = await fetchContactById(req.params.id);
    res
      .status(200)
      .json(new ApiResponse(true, "contact fetch successfully", data));
  } catch (error) {
    next(error);
  }
};
