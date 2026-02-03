import mongoose from "mongoose";

const soloSpotlightSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        collegeName: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        socialLink: {
            type: String,
            required: true,
        },
        whereDidYouHear: {
            type: String,
            required: true,
        },
        video: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const SoloSpotlight = mongoose.model("SoloSpotlight", soloSpotlightSchema);

export default SoloSpotlight;
