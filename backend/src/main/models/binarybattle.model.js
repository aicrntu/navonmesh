import mongoose from "mongoose";

const binarybattleSchema = new mongoose.Schema(
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

    githubLink: {
      type: String,
      required: true,
    },
    technologies: {
      type: String,
    },
    presentation: {
      type: String,
    },
    paymentScreenshot: {
      type: String,
      required: true,
    },
    project: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const BinaryBattle = mongoose.model("BinaryBattle", binarybattleSchema);

export default BinaryBattle;