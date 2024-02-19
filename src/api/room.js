import axios from "../config/axios";

export const getDormByDormId = (dormId) => axios.get(`/dorm/room/${dormId}`);
