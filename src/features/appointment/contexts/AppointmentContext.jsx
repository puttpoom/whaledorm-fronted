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
  // console.log(targetRoomId, "targetRoomId");

  const [roomTarget, setRoomTarget] = useState(initialRoom);
  const [appointments, setAppointment] = useState([]);
  const [userAppointments, setUserAppointments] = useState([]);
  const [dormAppointments, setDormAppointments] = useState([]);
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
  }, [targetRoomId]);

  useEffect(() => {
    if (authUser.role === "DORM") {
      const fetchDormAppointmentById = async () => {
        try {
          const res = await appointmentApi.getAllAppointmentByDormId(
            authUser.dorms.id
          );
          console.log(res.data);
          setDormAppointments(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchDormAppointmentById();
      setInitialLoading(false);
    }
  }, [authUser.role]);

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

  const handleClickResponBtn = async (
    appointmentId,
    // appointmentData,
    updatedaAppointmentData
  ) => {
    MySwal.fire({
      title: "คุณแน่ใจหรือไม่?",
      text: `ยืนยันการนัดหมาย`,
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
        const res = await appointmentApi.dormUpdateAppointment(
          appointmentId,
          updatedaAppointmentData
        );
        setDormAppointments(
          dormAppointments.map((app) =>
            app.id === appointmentId
              ? { ...app, ...updatedaAppointmentData }
              : app
          )
        );
        MySwal.fire({
          title: "ยืนยันการนัดหมาย!",
          // text: "Your file has been deleted.",
          icon: "success",
        });
      } else if (result.isDenied) {
        console.log("deny");
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
        appointments,
        dormAppointments,
        userAppointments,
        dormUpdateAppointment,
        handleClickResponBtn,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}
