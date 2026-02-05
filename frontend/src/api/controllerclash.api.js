import api from "./axios";

export const getAllControllerClash = () =>
    api.get("/admin/controllerclash");

export const getControllerClashById = (id) =>
    api.get(`/admin/controllerclash/${id}`);

export const controllerclashForm = (data) =>
    api.post("/controllerclash", data);
