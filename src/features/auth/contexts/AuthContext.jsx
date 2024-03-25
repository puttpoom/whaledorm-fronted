import { useEffect, createContext, useState } from "react";
import * as authApi from "../../../api/auth";
import {
  getToken,
  storeToken,
  clearToken,
} from "../../../utills/local-storage";
import MySwal from "../../../utills/sweetaleart";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState("");
  const [initialLoading, setInitialLoading] = useState(true);

  const [isOpenRegisterForm, setIsOpenRegisterForm] = useState(false);
  const [isOpenLoginForm, setIsOpenLoginForm] = useState(false);

  useEffect(() => {
    // //! Cannot async in useEffect but can  create asycfunc in useEffect
    // const fetch = async () => {
    //   const res = await authApi.fetchMe();
    // };
    const fetchAuth = async () => {
      if (getToken()) {
        await authApi
          .fetchMe()
          .then((res) => {
            setAuthUser(res.data.user);
            console.log(res.data.user);
          })
          .catch((err) => {
            console.log(err.response?.data.message);
            //toast.error(err.response?.data.message);
          })
          .finally(() => setInitialLoading(false));
      } else {
        setInitialLoading(false);
      }
    };
    fetchAuth();
  }, [initialLoading]);

  const register = async (user) => {
    const res = await authApi.register(user);
    setAuthUser(res.data.newUser);
    console.log(res.data.newUser);
    storeToken(res.data.accessToken);

    MySwal.fire({
      position: "center",
      icon: "success",
      title: "ลงทะเบียนสำเร็จ",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const login = async (credential) => {
    const res = await authApi.login(credential);
    setAuthUser(res.data.user);
    storeToken(res.data.accessToken);

    MySwal.fire({
      position: "center",
      icon: "success",
      title: "ล็อกอินสำเร็จ",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const logout = () => {
    setAuthUser("");
    clearToken();

    MySwal.fire({
      position: "center",
      icon: "success",
      title: "ออกจากระบบสำเร็จ",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        register,
        login,
        logout,
        initialLoading,
        isOpenRegisterForm,
        setIsOpenRegisterForm,
        isOpenLoginForm,
        setIsOpenLoginForm,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
