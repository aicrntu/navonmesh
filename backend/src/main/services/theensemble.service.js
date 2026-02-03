import TheEnsemble from "../models/theensemble.model.js";
import ApiError from "../../utils/ApiError.js";

export const handleTheEnsemble = async (data) => {
    const theEnsemble = await TheEnsemble.create(data);

    if (!theEnsemble) {
        throw new ApiError(500, "Failed to save the data");
    }
    return theEnsemble;
};
