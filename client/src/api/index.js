import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9000/api"
});

export const registerUser = payload => api.post(`/users/register`, payload);
export const loginUser = payload => api.post(`/users/login`, payload);
export const createSession = payload => api.post(`/session`, payload);
// export const getAllCards = () => api.get(`/cards`)
// export const updateCardById = (id, payload) => api.put(`/card/${id}`, payload)
// export const deleteCardById = id => api.delete(`/card/${id}`)
// export const deleteAllCards = () => api.delete(`/cards`)
// export const getCardById = id => api.get(`/card/${id}`)

const apis = {
  registerUser,
  loginUser,
  createSession
};

export default apis;
