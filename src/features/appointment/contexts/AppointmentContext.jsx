import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as roomApi from "../../../api/room";
import * as appointmentApi from "../../../api/appointment";

const initialRoom = {
  id: 1,
  title: "",
  info: "",
  roomImages:
    "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  price: "9999",
  size: 22,
  roomStatus: "VACANT",
  dormId: 1,
  createdAt: "dd/mm/yyyy - createdAt",
};

export const AppointmentContext = createContext();

export default function AppointmentContextProvider({ children }) {
  const { targetRoomId } = useParams();
  const [roomTarget, setRoomTarget] = useState(initialRoom);
  const [appointments, setAppointment] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchRoomByRoomId = async () => {
      try {
        const res = await roomApi.getRoomByRoomId(targetRoomId);
        setRoomTarget(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRoomByRoomId();
    setInitialLoading(false);
  }, []);

  useEffect(() => {
    const fetchAllAppointments = async () => {
      try {
        const res = await appointmentApi.getAllAppointmentByDormId(dormId);
        setAppointment(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllAppointments();
    setInitialLoading(false);
  }, []);

  const userCreateAppointment = async (appointment) => {
    const res = await appointmentApi.userCreateAppointment(appointment);
    console.log(res);
  };

  return (
    <AppointmentContext.Provider
      value={{
        roomTarget,
        userCreateAppointment,
        initialLoading,
        targetRoomId,
        appointments,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}
