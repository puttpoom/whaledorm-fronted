import axios from "../config/axios";

export const userCreateAppointment = (appointment) =>
  axios.post("/appointment/", appointment);

export const getAllAppointmentByDormId = (dormId) =>
  axios.get(`appointment/dorm/${dormId}`);

export const getUserAppointmentsByUserId = (userId) =>
  axios.get(`/appointment/${userId}`);

export const userDeleteAppointment = (appointmentId) =>
  axios.delete(`/user/appointment/${appointmentId}`);

export const dormDeleteAppointment = (appointmentId) =>
  axios.delete(`/dorm/appointment/${appointmentId}`);

export const dormUpdateAppointment = (appointmentId, appointmentStatus) =>
  axios.patch(`/appointment/${appointmentId}`, appointmentStatus);
