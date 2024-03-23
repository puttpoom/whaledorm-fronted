import axios from "../config/axios";

export const getAllVacantDorm = () => axios.get("/dorm/get-vacant-dorm");
export const registerDorm = () => axios.post("/dorm/register");
export const getAllVacantRoom = () => axios.get("/dorm");

// export const fetchDorm = () => axios.get("/me");
