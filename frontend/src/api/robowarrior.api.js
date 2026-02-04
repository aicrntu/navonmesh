import api from "./axios";

export const getAllRoboWarrior = () =>
    api.get("/admin/robo");

export const getRoboWarriorById = (id) =>
    api.get(`/admin/robo/${id}`);

export const roboWarriorForm = (data) =>
    api.post("/robowarrior", data);
