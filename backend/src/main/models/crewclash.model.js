import mongoose from "mongoose";

const crewClashSchema = mongoose.Schema(
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
        paymentScreenshot: {
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

const CrewClash = mongoose.model("CrewClash", crewClashSchema);

export default CrewClash;
