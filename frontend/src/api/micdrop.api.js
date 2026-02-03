import api from "./axios";

export const micDropForm = (data) => api.post("/micdrop", data);
