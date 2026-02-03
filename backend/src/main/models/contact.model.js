import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    number: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;