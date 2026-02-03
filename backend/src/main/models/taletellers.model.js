import mongoose from "mongoose";

const taleTellersSchema = mongoose.Schema(
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

const TaleTellers = mongoose.model("TaleTellers", taleTellersSchema);

export default TaleTellers;
