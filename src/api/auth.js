import axios from "../config/axios";

export const register = (user) => axios.post("/auth/register", user);
export const login = (credential) => axios.post("/auth/login", credential);
export const fetchMe = () => axios.get("/auth/me");

export const googleLogin = (credential) =>
  axios.post("/auth/google/login", credential);
// export const googleRegister = (credential) =>
//   axios.post("/auth/google/register", credential);
