import ApiError from "../../utils/ApiError.js";

export const validateTheEnsemble = (req, res, next) => {
    if (!req.body) {
        throw new ApiError(400, "Request body is missing");
    }

    const { email, name, contact } = req.body;

    if (!email || !name || !contact) {
        throw new ApiError(400, "Required fields are missing");
    }

    if (!email.includes("@")) {
        throw new ApiError(400, "Invalid email");
    }

    next();
};
