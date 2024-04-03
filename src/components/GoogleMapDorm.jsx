import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import useRoom from "../hooks/use-room";

const GoogleMapDorm = ({ latLong2, zoom }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });
  const { latLong } = useRoom();

  const lat = +latLong.split(",")[0];
  const long = +latLong.split(",")[1];

  const center = { lat: lat, lng: long };
  const radius = 800; // เช่น 10 กิโลเมตร

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

export default GoogleMapDorm;
