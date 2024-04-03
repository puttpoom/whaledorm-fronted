import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as roomApi from "../../../api/room";
import * as appointmentApi from "../../../api/appointment";
import MySwal from "../../../utills/sweetaleart";
import useAuth from "../../../hooks/use-auth";

const initialRoom = {
  id: null,
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
  // console.log(targetRoomId, "targetRoomId");

  const [roomTarget, setRoomTarget] = useState(initialRoom);
  const [userAppointments, setUserAppointments] = useState([]);
  const [dormAppointments, setDormAppointments] = useState([]);
  const [updateAppointmentData, setUpdateAppointmentData] = useState({});
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (targetRoomId) {
      const fetchRoomByRoomId = async () => {
        try {
          const res = await roomApi.getRoomByRoomId(targetRoomId);
          setRoomTarget(res.data);
          // console.log(res.data);
        } catch (err) {
          console.log(err);
        } finally {
          setInitialLoading(false);
        }
      };
      fetchRoomByRoomId();
    }
  }, [targetRoomId]);

  useEffect(() => {
    const fetchUserAppointments = async () => {
      try {
        const res = await appointmentApi.getUserAppointmentsByUserId(
          authUser.id
        );
        // console.log(res.data);
        setUserAppointments([...res.data]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserAppointments();
    setInitialLoading(false);
  }, [authUser.id]);

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
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await appointmentApi.userDeleteAppointment(appointmentId);
        setUserAppointments(
          userAppointments.filter((app) => app.id !== appointmentId)
        );
        MySwal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const dormUpdateAppointment = async (appointmentId) => {
    const res = await appointmentApi.dormUpdateAppointment(appointmentId);
  };

  const updateAppointment = async (appointmentId, updatedaAppointmentData) => {
    const res = await appointmentApi.dormUpdateAppointment(
      appointmentId,
      updatedaAppointmentData
    );
    setUpdateAppointmentData(
      dormAppointments.map((app) =>
        app.id === appointmentId ? { ...app, ...updatedaAppointmentData } : app
      )
    );
  };

  const handleClickResponBtn = async (
    appointmentId,
    // appointmentData,
    updatedaAppointmentData
  ) => {
    MySwal.fire({
      title: "คุณแน่ใจหรือไม่?",
      text: ``,
      icon: "warning",
      showDenyButton: true,
      showCancelButton: true,
      // denyButtonText: "#d33",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#808080",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ละทิ้ง",
      denyButtonText: "ยกเลิกการนัดหมาย",
    }).then(async (result) => {
      if (result.isConfirmed) {
        updateAppointment(appointmentId, updatedaAppointmentData);
        MySwal.fire({
          title: "ยืนยันการนัดหมาย!",
          icon: "success",
        });
      } else if (result.isDenied) {
        updateAppointment(appointmentId, updatedaAppointmentData);
        MySwal.fire({
          title: "ยกเลิกการนัดหมาย!",
          icon: "error",
        });
      }
    });
  };

  return (
    <AppointmentContext.Provider
      value={{
        roomTarget,
        userCreateAppointment,
        userDeleteAppointment,
        initialLoading,
        targetRoomId,
        dormAppointments,
        userAppointments,
        dormUpdateAppointment,
        handleClickResponBtn,
        updateAppointmentData,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}
