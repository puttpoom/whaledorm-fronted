import { Navigate, useParams } from "react-router-dom";
import useAuth from "../../../hooks/use-auth";

export default function RedirectIfAuthenticate({ children }) {
  const { targetUserId } = useParams();
  const { authUser } = useAuth();
  return authUser.role === "USER" && +targetUserId === authUser.id ? (
    children
  ) : (
    <Navigate to={`/user/appointments/${authUser.id}`} />
  );
}
