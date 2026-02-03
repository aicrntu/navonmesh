import {
  loginAdmin,
  createAdmin as createAdminService
} from "../services/auth.service.js";

import ApiResponse from "../../utils/ApiResponse.js";

export const adminLogin = async (req, res, next) => {
  try {
    const data = await loginAdmin(req.body);
    res.status(200).json(
      new ApiResponse(true, "Login successful", data)
    );
  } catch (error) {
    next(error);
  }
};

export const createAdminController = async (req, res, next) => {
  try {
    const data = await createAdminService(req.body);

    res.status(201).json(
      new ApiResponse(true, "Admin created successfully", data)
    );
  } catch (error) {
    next(error);
  }
};
