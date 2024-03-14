import RoomCard from "../../../components/RoomCard";
import useAppointment from "../../../hooks/use-appointment";
import { useEffect } from "react";

export default function UserAppointment() {
  const { userAppointments, refetch } = useAppointment();

  useEffect(() => {
    refetch();
  }, [userAppointments]);

  return (
    <div className="flex flex-col gap-8 bg-[#F1F5F9] p-12 h-content overflow-auto">
      {!userAppointments ? (
        <p>คุณยังไม่มีรายการนัดหมาย</p>
      ) : (
        userAppointments.map((appointment, index) => (
          <RoomCard
            key={index}
            appointmentId={appointment.id}
            appointedDate={appointment.appointedDate}
            appointedTime={appointment.appointedTime}
            rooms={appointment.room}
            statusBtn={appointment.appointmentStatus}
            isShowBookBtn={false}
            isShowStatusAppointmnetBtn={true}
            isShowDeleteBtn={true}
          />
        ))
      )}
    </div>
  );
}
