import mongoose from "mongoose";

const RoboWarriorSchema = new mongoose.Schema(
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

    numberOfTeam: {
      type: String,
      required: true,
    },
    presentation: {
      type: String,
    },
    paymentScreenshot: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const RoboWarrior = new mongoose.model("RoboWarrior", RoboWarriorSchema);

export default RoboWarrior;
