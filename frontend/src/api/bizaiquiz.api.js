import api from "./axios";

export const bizaiQuizForm = (data) => api.post("/bizaiquiz", data);

export const getAllBizaiQuiz = () => api.get("/admin/bizaiquiz");
