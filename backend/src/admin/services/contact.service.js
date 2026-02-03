import Contact from "../../main/models/contact.model.js";
import ApiError from "../../utils/ApiError.js";

export const fetchAllContact = async () => {
  const data = await Contact.find().sort({ createdAt: -1 });
  return data;
};

export const fetchContactById = async (id) => {
  const data = await Contact.findById(id);

  if (!data) {
    throw new ApiError(404, "Data not found");
  }
  return data;
};
