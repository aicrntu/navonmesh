import api from "./axios";

export const theEnsembleForm = (data) => api.post("/theensemble", data);
