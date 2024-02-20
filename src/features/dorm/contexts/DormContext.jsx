import { createContext, useEffect, useState } from "react";
import * as dormApi from "../../../api/dorm";
import { useParams } from "react-router-dom";
import Spinner from "../../../components/Spinner";

export const DormContext = createContext();

const initialDorm = {
  dormName: "",
  phone: "",
  dormImages: "",
  location: "",
  distance: "",
  electricalUnit: 0,
  waterUnit: 0,
};

const initialRoom = {
  room: {
    title: "",
    info: "",
    roomImages: "",
    price: 0,
    size: 0,
  },
  facilities: {
    isAir: "FAN",
    isWaterHeater: false,
    isFurniture: false,
    isTable: false,
    isSink: false,
  },
};

export default function DormContextProvider({ children }) {
  const [vacantDorms, setVacantDorms] = useState([]);
  const [registeredDorm, setRegisteredDorm] = useState(initialDorm);
  const [initialLoading, setInitialLoading] = useState(true);

  const { targetDormId } = useParams();

  useEffect(() => {
    const fetchAllVacantRoom = async () => {
      if (initialLoading) return <Spinner />;
      try {
        const res = await dormApi
          .getAllVacantDorm()
          .then((res) => setVacantDorms(res.data))
          .catch((err) => console.log(err));
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllVacantRoom();
    setInitialLoading(false);
  }, [initialLoading]);

  const registerDorm = async (dorm) => {
    const res = await dormApi.registerDorm(dorm);
    setRegisteredDorm(res.data.newDorm);
    console.log(res.data.newDorm);
    storeToken(res.data.accessToken);

    MySwal.fire({
      position: "center",
      icon: "success",
      title: "ลงทะเบียนหอพักสำเร็จ",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const calculateMinPrice = (rooms) => {
    const minPrice = Math.min(...rooms.map((room) => parseFloat(room.price)));
    return minPrice.toLocaleString();
  };

  const calculateMaxPrice = (rooms) => {
    const maxPrice = Math.max(...rooms.map((room) => parseFloat(room.price)));
    return maxPrice.toLocaleString();
  };

  // const findNewestCreatedAt = (createdAts) => {
  //   const newestDate = new Date(0);

  // };

  const findNewestCreatedAt = (data) => {
    const newestCreatedAt = data.reduce((maxDate, currentRoom) => {
      const currentDate = new Date(currentRoom.createdAt);
      return currentDate > maxDate ? currentDate : maxDate;
    }, new Date(0)); // Initialize with a minimum date

    return newestCreatedAt;
  };

  return (
    <DormContext.Provider
      value={{
        vacantDorms,
        registeredDorm,
        registerDorm,
        calculateMinPrice,
        calculateMaxPrice,
        findNewestCreatedAt,
      }}
    >
      {children}
    </DormContext.Provider>
  );
}
