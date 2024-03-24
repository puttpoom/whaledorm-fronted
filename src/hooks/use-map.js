import { useContext } from "react";
import { GoogleMapContext } from "../features/map/contexts/GoogleMapContext";

export default function useMap() {
  return useContext(GoogleMapContext);
}
