import { createContext, useEffect, useState } from "react";
import useAppointment from "../../../hooks/use-appointment";
import * as mapApi from "../../../api/map";

export const GoogleMapContext = createContext();

export default function GoogleMapContextProvider({ children }) {
  const [dormLatLong, setDormLatLong] = useState(null);

  useEffect(() => {
    const fetchLatLongDorm = async () => {
      try {
        const res = await mapApi.getLatLongDormByDormId(2);
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
