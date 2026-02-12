import ApiError from "../../utils/ApiError.js";

export const validateMicDrop = (req, res, next) => {
    if (!req.body) {
        throw new ApiError(400, "Request body is missing");
    }

    const { email, name, contact, participationType } = req.body;

    if (!email || !name || !contact || !participationType) {
        throw new ApiError(400, "Required fields are missing");
    }

    if (!email.includes("@")) {
        throw new ApiError(400, "Invalid email");
    }

    next();
};
