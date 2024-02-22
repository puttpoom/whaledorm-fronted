import DormRoomContainer from "../features/dorm/components/DormRoomContainer";
import RoomContextProvider from "../features/room/contexts/RoomContext";

export default function DormRoomPage() {
  return (
    <RoomContextProvider>
      <DormRoomContainer />
    </RoomContextProvider>
  );
}
