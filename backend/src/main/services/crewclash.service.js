import CrewClash from "../models/crewclash.model.js";
import ApiError from "../../utils/ApiError.js";

export const handleCrewClash = async (data) => {
    const crewClash = await CrewClash.create(data);

    if (!crewClash) {
        throw new ApiError(500, "Failed to save the data");
    }
    return crewClash;
};
