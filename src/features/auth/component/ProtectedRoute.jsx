import useAuth from "../../../hooks/use-auth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { authUser } = useAuth();
  console.log(authUser);
  return authUser ? children : <Navigate to="/home" />;
}
