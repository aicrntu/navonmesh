import mongoose from "mongoose";

export const connctDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connect faild", error);
    process.exit(1);
  }
};
