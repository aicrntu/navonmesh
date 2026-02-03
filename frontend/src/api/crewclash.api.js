import api from "./axios";

export const crewClashForm = (data) => api.post("/crewclash", data);
