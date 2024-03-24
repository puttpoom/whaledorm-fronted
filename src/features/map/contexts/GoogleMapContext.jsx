import { createContext, useEffect, useState } from "react";
import useAppointment from "../../../hooks/use-appointment";
import * as mapApi from "../../../api/map";

export const GoogleMapContext = createContext();

export default function GoogleMapContextProvider({ children }) {
  //   const { roomTarget } = useAppointment();
  //   console.log(roomTarget.dormId, "dormId");
  const [dormLatLong, setDormLatLong] = useState(null);
  // console.log(dormLatLong, "dormLatLong");

  useEffect(() => {
    const fetchLatLongDorm = async () => {
      try {
        const res = await mapApi.getLatLongDormByDormId(2);
        // console.log(res.data, "res.data");
        setDormLatLong(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLatLongDorm();
  }, []);

  return (
    <GoogleMapContext.Provider value={{ dormLatLong }}>
      {children}
    </GoogleMapContext.Provider>
  );
}
