import LoginForm from "../features/auth/component/LoginForm";
import RegisterForm from "../features/auth/component/RegisterForm";
import RoomContextProvider from "../features/room/contexts/RoomContext";
import useAuth from "../hooks/use-auth";
import Header from "../layouts/Header";
import { Outlet } from "react-router-dom"; //! for others components

export default function Container() {
  const { isOpenLoginForm, isOpenRegisterForm, authUser } = useAuth();
  // console.log(authUser);
  return (
    <div className="relative">
      <Header />

      {!authUser && isOpenRegisterForm && isOpenLoginForm === false && (
        <RegisterForm />
      )}

      {isOpenLoginForm && !authUser && <LoginForm />}

      <Outlet />
    </div>
  );
}
