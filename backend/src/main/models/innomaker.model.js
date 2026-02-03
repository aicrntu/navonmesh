import mongoose from "mongoose";

const innomakerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    whoAreYou: {
      type: String,
      required: true,
    },
    institute: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    themeOfProject: {
      type: String,
      
    },
    titleOfProject: {
      type: String,
      
    },
    aboutProject: {
      type: String,
    },
    presentation: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Innomaker = mongoose.model("Innomaker", innomakerSchema);

export default Innomaker;
