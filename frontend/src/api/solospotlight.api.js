import api from "./axios";

export const soloSpotlightForm = (data) => api.post("/solospotlight", data);

export const getAllSoloSpotlight = () => api.get("/admin/solospotlight");
