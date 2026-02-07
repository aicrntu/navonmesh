import mongoose from "mongoose";

const teamMemberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
});

const bizaiQuizSchema = mongoose.Schema(
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
        whereDidYouHear: {
            type: String,
            required: true,
        },
        teamMembers: [teamMemberSchema],
    },
    {
        timestamps: true,
    }
);

const BizaiQuiz = mongoose.model("BizaiQuiz", bizaiQuizSchema);

export default BizaiQuiz;
