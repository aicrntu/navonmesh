import api from "./axios";

export const taleTellersForm = (data) => api.post("/taletellers", data);

export const getAllTaleTellers = () => api.get("/admin/taletellers");
