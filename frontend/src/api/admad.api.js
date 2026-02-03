import api from "./axios";

export const getAllAdmad = () => api.get("/admin/admad");

export const getAdMadById = (id) => api.get(`/admin/admad/${id}`);

export const admadForm = (data) => api.post("/admad", data);
