import { createContext, useEffect, useState } from "react";
import useAppointment from "../../../hooks/use-appointment";
import * as mapApi from "../../../api/map";

export const GoogleMapContext = createContext();

export default function GoogleMapContextProvider({ children }) {
  return (
    <GoogleMapContext.Provider value={{}}>{children}</GoogleMapContext.Provider>
  );
}
