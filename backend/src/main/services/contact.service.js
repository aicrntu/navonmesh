import Contact from "../models/contact.model.js";
import ApiError from "../../utils/ApiError.js";

export const handleContactForm = async ({name, number, email, message}) => {
    const contact = await Contact.create({
        name, number, email, message
    });

    if(!contact){
        throw new ApiError(500, "Failed to save contact form");
    }

    return contact;
};