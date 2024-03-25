import axios from "../config/axios";

export const getRoomByRoomId = (roomId) =>
  axios.get(`/appointment/room/${roomId}`);

export const getDormByUserId = (userId) => axios.get(`/dorm/room/${userId}`);

export const getLatLongDormByUserId = (dormId) =>
  axios.get(`/dorm/maps/${dormId}`);

export const getAllVacantRoom = () => axios.get("/room");
