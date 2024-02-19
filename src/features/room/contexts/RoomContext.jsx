import { createContext, useState, useEffect } from "react";
import * as roomApi from "../../../api/room";
import { useParams } from "react-router-dom";

export const RoomContext = createContext();

export default function RoomContextProvider({ children }) {
  const { targetDormId } = useParams();
  const [dormRoom, setDormRoom] = useState({});

  useEffect(() => {
    const fetchDormByDormId = async () => {
      try {
        const res = await roomApi.getDormByDormId(targetDormId);
        console.log(res);
        setDormRoom(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDormByDormId();
  }, [targetDormId]); //prevent useParams undefeind first render

  return (
    <RoomContext.Provider value={dormRoom}>{children}</RoomContext.Provider>
  );
}
