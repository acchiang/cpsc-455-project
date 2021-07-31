import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000/api"
});

export const registerUser = payload => api.post(`/users/register`, payload);
export const loginUser = payload => api.post(`/users/login`, payload);
export const createSession = payload => api.post(`/session`, payload);
export const getUserByEmail = email => api.get(`/users/user/${email}`);
export const updateSessionUsersById = (id, payload) =>
  api.put(`/session/${id}/update-users`, payload);
export const getAllSessions = () => api.get(`/session`);

const apis = {
  registerUser,
  loginUser,
  createSession,
  getUserByEmail,
  updateSessionUsersById,
  getAllSessions
};

export default apis;
