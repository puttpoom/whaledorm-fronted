import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import useAppointment from "../../../hooks/use-appointment";
import useMap from "../../../hooks/use-map";

const GoogleMapAppointment = ({ room, zoom }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });
  const { dormLatLong } = useMap();
  console.log(dormLatLong, "GoolgeMapDorm");

  const lat = +dormLatLong.latLong.split(",")[0];
  const long = +dormLatLong.latLong.split(",")[1];
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
