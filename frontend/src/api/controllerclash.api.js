import api from "./axios";

export const getAllControllerClash = () =>
    api.get("/admin/controllerclash");

export const getControllerClashById = (id) =>
    api.get(`/admin/controllerclash/${id}`);

export const controllerClashForm = (data) =>
    api.post("/controllerclash", data);
