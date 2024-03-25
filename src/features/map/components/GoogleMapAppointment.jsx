import React, { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import * as mapApi from "../../../api/map";
import * as roomApi from "../../../api/room";
import { useParams } from "react-router-dom";

const GoogleMapAppointment = ({ dormId }) => {
  const { targetRoomId } = useParams();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });
  // const { dormLatLong } = useMap();
  // console.log(dormLatLong, "GoolgeMapDorm");

  const [dormLatLong, setDormLatLong] = useState("0, 0");

  useEffect(() => {
    const fetchLatLongDorm = async () => {
      try {
        const res = await roomApi.getLatLongDormByUserId(dormId);
        console.log(targetRoomId, "targetRoomId");
        console.log(res.data, "res.data");
        setDormLatLong(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchLatLongDorm();
  }, [dormId]);

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
          zoom={19}
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
