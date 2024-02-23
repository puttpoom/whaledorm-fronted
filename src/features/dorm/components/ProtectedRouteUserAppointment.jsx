import useAuth from "../../../hooks/use-auth";
import { Navigate } from "react-router-dom";
import MySwal from "../../../utills/sweetaleart";

export default function ProtectedRouteUserAppointment({ children }) {
  const { authUser } = useAuth();
  console.log(authUser);

  MySwal.fire({
    position: "center",
    icon: "error",
    title: `คุณยังไม่ได้เข้าสู่ระบบ`,
    text: "กรณาเข้าสุ่ระบบ!",
    showConfirmButton: false,
    timer: 2000,
  });

  return authUser.role === "USER" ? children : <Navigate to="/" />;
}
