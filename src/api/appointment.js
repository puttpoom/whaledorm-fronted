import axios from "../config/axios";

export const userCreateAppointment = (appointment) =>
  axios.post("/appointment/", appointment);

export const getAllAppointmentByDormId = (dormId) =>
  axios.get(`/dorm/appointments/${dormId}`);

export const getUserAppointmentsByUserId = (userId) =>
  axios.get(`/appointment/${userId}`);
