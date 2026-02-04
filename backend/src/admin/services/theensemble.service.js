import TheEnsemble from "../../main/models/theensemble.model.js";
import ApiError from "../../utils/ApiError.js";

export const fetchAllTheEnsemble = async () => {
    const data = await TheEnsemble.find().sort({ createdAt: -1 });
    return data;
};

export const fetchTheEnsembleById = async (id) => {
    const data = await TheEnsemble.findById(id);
    if (!data) throw new ApiError(404, "Data not found");
    return data;
};
