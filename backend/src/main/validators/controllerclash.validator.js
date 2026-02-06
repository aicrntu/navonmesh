import ApiError from "../../utils/ApiError.js";

export const validateControllerClash = (req, res, next) => {
    if (!req.body) {
        throw new ApiError(400, "Request body is missing");
    }

    const {
        teamName, captainName, captainPhone, captainEmail,
        playerName, bgmiIGN, bgmiPlayerId,
        player2Name, player2IGN, player2Id,
        player3Name, player3IGN, player3Id,
        player4Name, player4IGN, player4Id,
        tournamentType
    } = req.body;

    if (
        !teamName || !captainName || !captainPhone || !captainEmail ||
        !playerName || !bgmiIGN || !bgmiPlayerId ||
        !player2Name || !player2IGN || !player2Id ||
        !player3Name || !player3IGN || !player3Id ||
        !player4Name || !player4IGN || !player4Id
    ) {
        throw new ApiError(400, "Required fields are missing");
    }

    if (!captainEmail.includes("@")) {
        throw new ApiError(400, "Invalid email");
    }

    next();
};
