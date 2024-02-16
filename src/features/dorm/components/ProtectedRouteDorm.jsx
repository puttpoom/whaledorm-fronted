import useAuth from "../../../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function ProtectedRouteDorm({ children }) {
  const { authUser } = useAuth();
  console.log(authUser);
  return authUser.role === "DORM" ? children : <Navigate to="/" />;
}
