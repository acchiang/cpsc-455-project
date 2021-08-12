import axios from "axios";

export const registerUser = (sessionId, user) =>
  axios.put(`/api/sessions/${sessionId}/users`, user);
export const createSession = payload => axios.post(`/api/sessions`, payload);
export const getAllSessions = () => axios.get(`/api/sessions`);

const apis = {
  registerUser,
  createSession,
  getAllSessions
};

export default apis;
