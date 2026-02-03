import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "super-admin"],
      default: "admin",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Admin", adminSchema);

