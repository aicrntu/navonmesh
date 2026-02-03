import mongoose from "mongoose";

const planXSchema = new mongoose.Schema(
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
    organizationName: {
      type: String,
      required: true,
    },
    teamMemberaName: {
      type: String,
      required: true,
    },
    emailOfTeam: {
      type: String,
      required: true,
    },
    teamDetail: {
      type: String,
      required: true,
    },
    aboutStartup: {
      type: String,
      required: true,
    },
    presentation: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Planx = mongoose.model("Planx", planXSchema);

export default Planx;
