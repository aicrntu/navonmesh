import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../models/admin.model.js";
import ApiError from "../../utils/ApiError.js";

export const loginAdmin = async ({ email, password }) => {
  const admin = await Admin.findOne({ email }).select("+password");

  if (!admin) {
    throw new ApiError(401, "Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    throw new ApiError(401, "Invalid credentials");
  }

  const token = jwt.sign(
    {
      id: admin._id,
      role: admin.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  return { token, admin };
};


export const createAdmin = async ({
  name,
  email,
  password,
  role = "admin",
}) => {
  const existingAdmin = await Admin.findOne({ email });

  if (existingAdmin) {
    throw new ApiError(409, "Admin with this email already exist");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const admin = await Admin.create({
    name,
    email,
    password: hashedPassword,
    role,
  });

  if (!admin) {
    throw new ApiError(500, "Failed to create admin");
  }

  return admin;
};
