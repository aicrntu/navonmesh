import mongoose from "mongoose";

const admadSchema = mongoose.Schema(
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
    collegeName: {
      type: String,
      required: true,
    },
    numberOfTeamMember: {
      type: String,
      required: true,
    },

    video: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const AdMad = mongoose.model("AdMad", admadSchema);

export default AdMad;
