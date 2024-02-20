import { useContext } from "react";
import { RoomContext } from "../features/room/contexts/RoomContext";

export default function useRoom() {
  return useContext(RoomContext);
}
