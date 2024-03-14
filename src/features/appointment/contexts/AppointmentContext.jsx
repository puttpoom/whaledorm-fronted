import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as roomApi from "../../../api/room";
import * as appointmentApi from "../../../api/appointment";
import MySwal from "../../../utills/sweetaleart";
import useAuth from "../../../hooks/use-auth";

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
  createdAt: "dd/mm/yyyy",
};

export const AppointmentContext = createContext();

export default function AppointmentContextProvider({ children }) {
  const { authUser } = useAuth();
  const { targetRoomId } = useParams();

  const [roomTarget, setRoomTarget] = useState(initialRoom);
  const [appointments, setAppointment] = useState([]);
  const [userAppointments, setUserAppointments] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);

  const refetch = () => {
    const fetchRoomByRoomId = async () => {
      try {
        const res = await roomApi.getRoomByRoomId(targetRoomId);
        setRoomTarget(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const fetchAllAppointments = async () => {
      try {
        const res = await appointmentApi.getAllAppointmentByDormId(dormId);
        setAppointment(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    const fetchUserAppointments = async () => {
      try {
        const res = await appointmentApi.getUserAppointmentsByUserId(
          authUser.id
        );
        setUserAppointments(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRoomByRoomId();
    fetchAllAppointments();
    fetchUserAppointments();
  };

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
  }, [targetRoomId]);

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

  useEffect(() => {
    const fetchUserAppointments = async () => {
      try {
        const res = await appointmentApi.getUserAppointmentsByUserId(
          authUser.id
        );
        // console.log(res.data);
        setUserAppointments(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserAppointments();
    setInitialLoading(false);
  }, []);

  const userCreateAppointment = async (appointment) => {
    const res = await appointmentApi.userCreateAppointment(appointment);

    if (res.status === 201) {
      MySwal.fire({
        position: "center",
        icon: "success",
        title: "ทำการนัดหมายสำเร็จ",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      MySwal.fire({
        position: "center",
        icon: "error",
        title: "ทำการนัดหมายไม่สำเร็จ",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    console.log(res);
  };

  const userDeleteAppointment = async (appointmentId) => {
    const res = await appointmentApi.userDeleteAppointment(appointmentId);
    if (res.status === 204) {
      MySwal.fire({
        position: "center",
        icon: "success",
        title: "ลบการนัดหมายสำเร็จ",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      MySwal.fire({
        position: "center",
        icon: "error",
        title: "ลบการนัดหมายไม่สำเร็จ",
        showConfirmButton: false,
        timer: 2000,
      });
    }
    console.log(res);
  };

  return (
    <AppointmentContext.Provider
      value={{
        roomTarget,
        userCreateAppointment,
        userDeleteAppointment,
        refetch,
        initialLoading,
        targetRoomId,
        appointments,
        userAppointments,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}
