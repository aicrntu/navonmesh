import api from "./axios";

export const getAllbinnarybattle = () => api.get("/admin/binarrybattle");

export const getBinarryBattleById = (id) =>
  api.get(`/admin/binnaybattle/${id}`);

export const binarrybattleForm = (data) => api.post("/binarybattle", data);
