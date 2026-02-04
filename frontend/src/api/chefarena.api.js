import api from "./axios";

export const chefArenaForm = (data) => api.post("/chefarena", data);

export const getAllChefArena = () => api.get("/admin/chefarena");
