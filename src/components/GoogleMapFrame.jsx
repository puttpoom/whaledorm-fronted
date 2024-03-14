import React from "react";
import { GoogleMap, LoadScript, Circle } from "@react-google-maps/api";
import useRoom from "../hooks/use-room";

const GoogleMapFrame = () => {
  const { latLong } = useRoom();
  console.log(latLong);
  const lat = +latLong.split(",")[0];
  const long = +latLong.split(",")[1];

  const center = { lat: lat, lng: long };
  // ตำแหน่งศูนย์กลางของวงกลม
  //   13.819246400969833, 100.51442149372211;

  // รัศมีของวงกลม (เป็นเมตร)
  const radius = 800; // เช่น 10 กิโลเมตร

  return (
    <div className="z-10">
      <LoadScript googleMapsApiKey="AIzaSyAPK-dQk-jAStQIzoKHRj2CG2oFHXZaVvU">
        <GoogleMap
          mapContainerStyle={{ height: "400px", width: "100%" }}
          center={center}
          zoom={15}
        >
          <Circle
            center={center}
            radius={radius}
            options={{
              strokeColor: "#FF0000",
              strokeOpacity: 0.5,
              strokeWeight: 2,
              fillColor: "#FF0000",
              fillOpacity: 0.2,
            }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GoogleMapFrame;
