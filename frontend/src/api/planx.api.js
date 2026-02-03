import api from "./axios";

export const getAllPlanx = () =>
  api.get("/admin/planx");

export const getPlanxById = (id) =>
  api.get(`/admin/planx/${id}`);

export const planxForm = (data) =>
  api.post("/planx", data);
