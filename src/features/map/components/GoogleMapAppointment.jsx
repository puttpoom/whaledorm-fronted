import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import * as mapApi from "../../../api/map";

const GoogleMapAppointment = ({ room, zoom }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });
  // const { dormLatLong } = useMap();
  // console.log(dormLatLong, "GoolgeMapDorm");

  const [dormLatLong, setDormLatLong] = useState("0, 0");

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

  // const lat = dormLatLong.latLong ? +dormLatLong.latLong.split(",")[0] : null;
  // const long = dormLatLong.latLong ? +dormLatLong.latLong.split(",")[1] : null;
  // const center = lat && long ? { lat: lat, lng: long } : null;

  const lat = +dormLatLong.latLong?.split(",")[0];
  const long = +dormLatLong.latLong?.split(",")[1];
  const center = { lat: lat, lng: long };

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ height: "400px", width: "100%" }}
          center={center}
          zoom={zoom || 19}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default GoogleMapAppointment;
