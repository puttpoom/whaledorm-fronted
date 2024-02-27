import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapRoom = (latLong, zoom) => {
  const lat = +latLong.split(",")[0];
  const long = +latLong.split(",")[1];

  const center = { lat: lat, lng: long };
  // ตำแหน่งศูนย์กลางของวงกลม
  //   13.819246400969833, 100.51442149372211;

  // รัศมีของวงกลม (เป็นเมตร)
  const radius = 800; // เช่น 10 กิโลเมตร

  return (
    <LoadScript googleMapsApiKey="AIzaSyAPK-dQk-jAStQIzoKHRj2CG2oFHXZaVvU">
      <GoogleMap
        mapContainerStyle={{ height: "400px", width: "100%" }}
        center={center}
        zoom={zoom}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapRoom;
