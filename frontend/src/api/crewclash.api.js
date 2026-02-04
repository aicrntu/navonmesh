import api from "./axios";

export const crewClashForm = (data) => api.post("/crewclash", data);

export const getAllCrewClash = () => api.get("/admin/crewclash");
