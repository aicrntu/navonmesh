import api from "./axios";

export const getAllRobo = () =>
    api.get("/admin/robo");

export const getRoboById = (id) =>
    api.get(`/admin/robo/${id}`);

export const robowarriorForm = (data) =>
    api.post("/robowarrior", data);
