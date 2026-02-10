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
    projectName: {
      type: String,
      required: true,
    },
    projectDescription: {
      type: String,
      required: true,
    },
    githubLink: {
      type: String,
    },
    technologies: {
      type: String,
    },
    presentation: {
      type: String,
    },
    project: {
      type: String,
    },
    paymentScreenshot: {
      type: String,
      required: true,
    },
    participants: {
      type: [
        {
          name: {
            type: String,
            required: true,
          },
          phone: {
            type: String,
            required: true,
          },
        },
      ],
      validate: {
        validator: function (v) {
          return v && v.length >= 2 && v.length <= 4;
        },
        message: "A team must have between 2 and 4 participants.",
      },
    },
  },
  {
    timestamps: true,
  },
);

const Innomaker = mongoose.model("Innomaker", innomakerSchema);

export default Innomaker;
