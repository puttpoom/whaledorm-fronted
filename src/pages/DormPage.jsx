import { useEffect, useState } from "react";
import DormRegisterForm from "../features/dorm/components/DormRegisterForm";
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
      <DormRegisterForm />
    </>
  );
}
