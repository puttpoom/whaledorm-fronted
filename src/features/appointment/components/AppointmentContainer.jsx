import RoomCard from "../../../components/RoomCard";
import useAppointment from "../../../hooks/use-appointment";

export default function AppointmentContainer() {
  const { roomTarget, initialLoading } = useAppointment();
  console.log(roomTarget);
  return (
    <div>
      roomCard
      {/* {roomTarget ? <RoomCard rooms={roomTarget} /> : null} */}
    </div>
  );
}
