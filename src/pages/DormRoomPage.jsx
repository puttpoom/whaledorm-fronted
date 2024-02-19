import RoomContextProvider from "../features/room/contexts/RoomContext";
import useDorm from "../hooks/use-dorm";

export default function DormRoomPage() {
  const { dormRoom } = useDorm();
  return (
    <RoomContextProvider>
      <div>DormRoomPage</div>
    </RoomContextProvider>
  );
}
