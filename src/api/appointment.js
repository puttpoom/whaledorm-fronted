import axios from "../config/axios";

export const userCreateAppointment = (appointment) =>
  axios.post("/appointment/", appointment);

export const getAllAppointmentByDormId = () =>
  axios.get(`appointment/dorm/appointments`);

export const getUserAppointmentsByUserId = (userId) =>
  axios.get(`/appointment/${userId}`);

export const userDeleteAppointment = (appointmentId) =>
  axios.delete(`/appointment/${appointmentId}`);

export const dormUpdateAppointment = (appointmentId, appointmentStatus) =>
  axios.patch(`/appointment/${appointmentId}`, appointmentStatus);
