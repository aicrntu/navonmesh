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
            enum: ["", "IGL", "Assaulter", "Support", "Sniper"],
        },
        // Player 2
        player2Name: { type: String, required: true },
        player2IGN: { type: String, required: true },
        player2Id: { type: String, required: true },
        player2Role: { type: String, enum: ["", "IGL", "Assaulter", "Support", "Sniper"] },
        // Player 3
        player3Name: { type: String, required: true },
        player3IGN: { type: String, required: true },
        player3Id: { type: String, required: true },
        player3Role: { type: String, enum: ["", "IGL", "Assaulter", "Support", "Sniper"] },
        // Player 4
        player4Name: { type: String, required: true },
        player4IGN: { type: String, required: true },
        player4Id: { type: String, required: true },
        player4Role: { type: String, enum: ["", "IGL", "Assaulter", "Support", "Sniper"] },

        tournamentType: {
            type: String,
            enum: ["Squad"],
            default: "Squad",
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
