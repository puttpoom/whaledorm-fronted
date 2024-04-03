import { createContext, useEffect, useState } from "react";
import * as dormApi from "../../../api/dorm";
import Spinner from "../../../components/Spinner";
import MySwal from "../../../utills/sweetaleart";
import useAuth from "../../../hooks/use-auth";

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
  const { fetchAuth } = useAuth();
  const [vacantDorms, setVacantDorms] = useState([]);
  const [registerDormLoading, setRegisterDormLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

  const fetchAllVacantRoom = async () => {
    try {
      const res = await dormApi.getAllVacantDorm();
      setVacantDorms(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAuth();
  }, [registerDormLoading]);

  useEffect(() => {
    fetchAllVacantRoom();
    setInitialLoading(false);
  }, [initialLoading]);

  const registerDorm = async (dormInfo, dormFacilities) => {
    console.log(dormInfo, "dormInfo");
    console.log(dormFacilities, "dormFacilities");
    try {
      const dormData = { dorm: dormInfo, dormFacilities };
      const res = await dormApi.registerDorm(dormData);
      console.log(res, "res dormData");

      await MySwal.fire({
        position: "center",
        icon: "success",
        title: "ลงทะเบียนหอพักสำเร็จ",
        showConfirmButton: false,
        timer: 2000,
      });

      window.location.reload();
    } catch (err) {
      console.log(err, "error");
    } finally {
      setRegisterDormLoading(false);
    }
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
        registerDormLoading,
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
