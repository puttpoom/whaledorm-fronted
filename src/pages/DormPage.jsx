import { useEffect, useState } from "react";
import CreateRoomForm from "../features/dorm/components/CreateRoomForm";
// import useDorm from "../hooks/use-dorm";
import useAuth from "../hooks/use-auth";
import MySwal from "../utills/sweetaleart";

export default function DormPage() {
  const { authUser } = useAuth();

  if (!authUser.dorms) {
    MySwal.fire({
      position: "center",
      icon: "warning",
      title: `ท่านยังไม่ได้ลงทะเบียนหอพัก`,
      text: "โปรดลงทะเบียนหอพักเพื่อเข้าถึงการใช้งาน",
      showConfirmButton: false,
      timer: 5 * 1000,
    });
  }

  console.log(authUser.dorms);
  return (
    <>
      {authUser.dorms ? <p>registerd dorm</p> : <p>un registered dorm</p>}
      <CreateRoomForm />
    </>
  );
}
