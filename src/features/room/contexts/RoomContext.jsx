import { createContext, useState, useEffect } from "react";
import * as roomApi from "../../../api/room";
import { useParams } from "react-router-dom";

const initial = {
  isAir: "AIRCONDITION",
  isWaterHeater: false,
  isFurniture: false,
  isTable: false,
  isSink: false,
};

export const RoomContext = createContext();

const initialLatLong = "13.81917867313595, 100.51444298065579";

export default function RoomContextProvider({ children }) {
  const { targetDormId } = useParams();

  const [dormRoom, setDormRoom] = useState({});
  const [rooms, setRooms] = useState([]);
  const [dormFacilities, setDormFacilities] = useState({});
  const [latLong, setLatLong] = useState(initialLatLong);
  const [vacantRooms, setVacantRooms] = useState([]);

  // console.log(dormRoom);

  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const fetchDormRoom = async () => {
      try {
        const res = await roomApi.getDormByDormId(targetDormId);
        setDormRoom(res.data);
        setRooms(res.data.room);
        setDormFacilities(res.data.dormFacilities);
        setLatLong(res.data.latLong || initialLatLong);
        console.log(latLong, "latLong");
      } catch (error) {
        console.log(error);
      }
    };
    fetchDormRoom();
    setInitialLoading(false);
  }, [targetDormId]);

  useEffect(() => {
    const fetchVacantRooms = async () => {
      try {
        const res = await roomApi.getAllVacantRoom();
        setVacantRooms(res.data);
        console.log(res.data, "vacantRooms");
      } catch (error) {
        console.log(error);
      }
    };
    fetchVacantRooms();
  }, []);

  const calculateMinPrice = (rooms) => {
    const minPrice = Math.min(...rooms.map((room) => parseFloat(room.price)));
    return minPrice.toLocaleString();
  };

  const calculateMaxPrice = (rooms) => {
    const maxPrice = Math.max(...rooms.map((room) => parseFloat(room.price)));
    return maxPrice.toLocaleString();
  };

  return (
    <RoomContext.Provider
      value={{
        dormRoom,
        rooms,
        dormFacilities,
        initialLoading,
        latLong,
        calculateMinPrice,
        calculateMaxPrice,
        vacantRooms,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}
