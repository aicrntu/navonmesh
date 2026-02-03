import api from "./axios";

export const getAllInnomaker = () =>
    api.get("/admin/innomaker");

export const getInnomakerById = (id) =>
    api.get(`/admin/innomaker/${id}`);

export const innomakerForm = (data) =>
    api.post("/innomaker", data);