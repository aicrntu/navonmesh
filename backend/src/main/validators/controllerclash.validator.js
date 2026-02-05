import ApiError from "../../utils/ApiError.js";

export const validateControllerClash = (req, res, next) => {
    if (!req.body) {
        throw new ApiError(400, "Request body is missing");
    }

    const { teamName, captainName, captainPhone, captainEmail, playerName, bgmiIGN, bgmiPlayerId, tournamentType } = req.body;

    if (!teamName || !captainName || !captainPhone || !captainEmail || !playerName || !bgmiIGN || !bgmiPlayerId || !tournamentType) {
        throw new ApiError(400, "Required fields are missing");
    }

    if (!captainEmail.includes("@")) {
        throw new ApiError(400, "Invalid email");
    }

    next();
};
