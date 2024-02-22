import { useContext } from "react";
import { AppointmentContext } from "../features/appointment/contexts/AppointmentContext";

export default function useAppointment() {
  return useContext(AppointmentContext);
}
