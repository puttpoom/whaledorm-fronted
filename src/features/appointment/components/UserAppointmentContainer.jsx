import RoomCard from "../../../components/RoomCard";
import useAppointment from "../../../hooks/use-appointment";

export default function UserAppointment() {
  const { userAppointments } = useAppointment();
  console.log(userAppointments);
  return (
    <div className="flex flex-col gap-8 bg-[#F1F5F9] p-12">
      {userAppointments.map((appointment, index) => (
        <RoomCard
          key={index}
          appointedDate={appointment.appointedDate}
          appointedTime={appointment.appointedTime}
          rooms={appointment.room}
          statusBtn={appointment.appointmentStatus}
          isShowBookBtn={false}
          isShowStatusAppointmnetBtn={true}
        />
      ))}
    </div>
  );
}
