import CrewClash from "../../main/models/crewclash.model.js";
import ApiError from "../../utils/ApiError.js";

export const fetchAllCrewClash = async () => {
    const data = await CrewClash.find().sort({ createdAt: -1 });
    return data;
};

export const fetchCrewClashById = async (id) => {
    const data = await CrewClash.findById(id);
    if (!data) throw new ApiError(404, "Data not found");
    return data;
};
