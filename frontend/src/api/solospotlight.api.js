import api from "./axios";

export const soloSpotlightForm = (data) => api.post("/solospotlight", data);
