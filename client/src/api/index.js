import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000/api"
});

export const registerUser = (sessionId, user) => api.put(`sessions/${sessionId}/users`, user);
export const loginUser = payload => api.post(`/users/login`, payload);
export const createSession = payload => api.post(`/sessions`, payload);
export const getUserByEmail = email => api.get(`/users/user/${email}`);
export const getAllSessions = () => api.get(`/sessions`);

const apis = {
  registerUser,
  loginUser,
  createSession,
  getUserByEmail,
  getAllSessions
};

export default apis;
