import mongoose from "mongoose";

const ControllerClashSchema = new mongoose.Schema(
    {
        teamName: {
            type: String,
            required: true,
        },
        captainName: {
            type: String,
            required: true,
        },
        captainPhone: {
            type: String,
            required: true,
        },
        captainEmail: {
            type: String,
            required: true,
        },
        playerName: {
            type: String,
            required: true,
        },
        bgmiIGN: {
            type: String,
            required: true,
        },
        bgmiPlayerId: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["IGL", "Assaulter", "Support", "Sniper"],
        },
        tournamentType: {
            type: String,
            required: true,
            enum: ["Solo", "Duo", "Squad"],
        },
        paymentScreenshot: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const ControllerClash = mongoose.model("ControllerClash", ControllerClashSchema);

export default ControllerClash;
