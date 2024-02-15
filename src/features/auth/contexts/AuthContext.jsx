import { useEffect, createContext, useState } from "react";
import * as authApi from "../../../api/auth";
import { getToken, storeToken } from "../../../utils/localstorage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);

  // useEffect(() => {
  //   // //! Cannot async in useEffect but can  create asycfunc in useEffect
  //   // const fetch = async () => {
  //   //   const res = await authApi.fetchMe();
  //   // };
  //   if (getToken()) {
  //     authApi
  //       .fetchMe()
  //       .then((res) => {
  //         setAuthUser(res.data.user);
  //       })
  //       .catch((err) => {
  //         console.log(err.response?.data.message);
  //         //toast.error(err.response?.data.message);
  //       })
  //       .finally(() => setInitialLoading(false));
  //   } else {
  //     // setInitialLoading(false);
  //   }
  // }, []);

  const register = async (user) => {
    const res = await authApi.register(user);
    setAuthUser(res.data.newUser);
    console.log(res.data.newUser);
    storeToken(res.data.accessToken);
  };
  return (
    <AuthContext.Provider value={{ authUser, register }}>
      {children}
    </AuthContext.Provider>
  );
}
