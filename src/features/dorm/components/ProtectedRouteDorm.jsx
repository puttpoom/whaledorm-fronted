import useAuth from "../../../hooks/use-auth";
import { Navigate } from "react-router-dom";
import MySwal from "../../../utills/sweetaleart";

export default function ProtectedRouteDorm({ children }) {
  const { authUser } = useAuth();
  console.log(authUser);

  if (authUser.role !== "DORM") {
    MySwal.fire({
      position: "center",
      icon: "error",
      title: `คุณไม่ได้รับอนุญาต`,
      text: "พื้นที่นี้สำหรับผู้ให้บริการหอพักเท่านั้น!",
      showConfirmButton: false,
      timer: 2000,
    });
  }

  return authUser.role === "DORM" ? children : <Navigate to="/" />;
}
