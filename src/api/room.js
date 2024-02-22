import axios from "../config/axios";

export const getRoomByRoomId = (roomId) =>
  axios.get(`/appointment/room/${roomId}`);
export const getDormByDormId = (dormId) => axios.get(`/dorm/room/${dormId}`);
export const getLatLongDormByUserId = (dormId) =>
  axios.get(`/dorm/maps/${dormId}`);
