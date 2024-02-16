import LoginForm from "../features/auth/component/LoginForm";
import RegisterForm from "../features/auth/component/RegisterForm";
import useAuth from "../hooks/use-auth";
import Header from "../layouts/Header";
import { Outlet } from "react-router-dom"; //! for others components

const Container = () => {
  const { isOpenLoginForm, isOpenRegisterForm, authUser } = useAuth();
  console.log("OpenLogInForm", isOpenLoginForm);
  console.log("authUser", authUser);
  return (
    <div className="grid">
      <Header />
      {!authUser && isOpenRegisterForm && isOpenLoginForm === false && (
        <RegisterForm />
      )}
      {isOpenLoginForm && !authUser && <LoginForm />}
      <Outlet />
    </div>
  );
};

export default Container;
