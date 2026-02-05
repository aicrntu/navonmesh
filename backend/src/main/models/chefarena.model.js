import mongoose from "mongoose";

const chefArenaSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        pincode: {
            type: String,
        },
        paymentScreenshot: {
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
        }
    },
    {
        timestamps: true,
    }
);

const ChefArena = mongoose.model("ChefArena", chefArenaSchema);

export default ChefArena;
