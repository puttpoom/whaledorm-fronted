import RoomCard from "../../../components/RoomCard";
import useRoom from "../../../hooks/use-room";

export default function RoomContainer() {
  const { rooms } = useRoom();
  console.log(rooms);
  return (
    <div className="flex flex-col gap-4">
      {rooms.map((rooms, index) => (
        <RoomCard key={index} rooms={rooms} />
      ))}
    </div>
  );
}
