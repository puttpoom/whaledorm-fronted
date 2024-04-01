import { useEffect, createContext, useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import * as authApi from "../../../api/auth";
import {
  getToken,
  storeToken,
  clearToken,
} from "../../../utills/local-storage";
import MySwal from "../../../utills/sweetaleart";
import axios from "axios";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState("");
  const [initialLoading, setInitialLoading] = useState(true);

  //google login
  const [googleUser, setGoogleUser] = useState("");
  const [googleToken, setGoogleToken] = useState(null);
  const [profile, setProfile] = useState([]);

  const [isOpenRegisterForm, setIsOpenRegisterForm] = useState(false);
  const [isOpenLoginForm, setIsOpenLoginForm] = useState(false);

  const googleLogin = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      console.log(codeResponse, "codeResponse");
      setGoogleUser(codeResponse);
      const token = await authApi.googleLogin(codeResponse);
      setGoogleToken(token);
      console.log("google login successfully");
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    fetchGoogleAuth(googleUser);
  }, [googleToken]);

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
  }, [initialLoading, googleToken]);

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

    googleLogout();
    setUser(null);
    setProfile(null);

    MySwal.fire({
      position: "center",
      icon: "success",
      title: "ออกจากระบบสำเร็จ",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const fetchGoogleAuth = async () => {
    if (googleUser && googleToken) {
      await axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${googleUser.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then(async (res) => {
          //decode token
          console.log(res, "resssssssss");
          setAuthUser(res.data);
          const resToken = await authApi.googleLogin(res.data);
          console.log(resToken, "010211020120120210021");
          storeToken(resToken.data.accessToken);
        })
        .catch((err) => console.log(err));
    }
  };

  // const googleRegister = async (credential) => {
  //   const res = await authApi.googleRegister(credential);
  //   setAuthUser(res.data.user);
  //   storeToken(res.data.accessToken);
  // };

  // const googleLogin = async (credential) => {
  //   const res = await authApi.googleLogin(credential);
  //   setAuthUser(res.data.user);
  //   storeToken(res.data.accessToken);
  // };

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
        googleLogin,
        profile,
        setProfile,
        googleUser,
        setGoogleUser,
        setAuthUser,
        googleToken,
        fetchGoogleAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
