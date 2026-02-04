import api from "./axios";

export const getAllBinaryBattle = () => api.get("/admin/binarrybattle");

export const getBinaryBattleById = (id) =>
  api.get(`/admin/binnaybattle/${id}`);

export const binaryBattleForm = (data) => api.post("/binarybattle", data);
