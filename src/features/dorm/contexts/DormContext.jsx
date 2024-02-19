import { createContext, useEffect, useState } from "react";
import * as dormApi from "../../../api/dorm";
import { useParams } from "react-router-dom";

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

  const { targetDormId } = useParams();

  useEffect(() => {
    const fetchAllVacantRoom = async () => {
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
  }, []);

  // useEffect(() => {
  //   const fetchDormByDormId = async () => {
  //     try {
  //       const res = await dormApi.getDormByDormId(targetDormId);
  //       console.log(res);
  //       setDormRoom(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchDormByDormId();
  // }, [targetDormId]); //prevent useParams undefeind first render

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

  return (
    <DormContext.Provider
      value={{
        vacantDorms,
        registeredDorm,
        registerDorm,
        calculateMinPrice,
        calculateMaxPrice,
      }}
    >
      {children}
    </DormContext.Provider>
  );
}
