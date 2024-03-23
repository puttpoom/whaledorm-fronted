import RoomCard from "../../../components/RoomCard";
import useAppointment from "../../../hooks/use-appointment";

import AppointmentForm from "./AppointmentForm";
import DormTitleAppointment from "./DormTitleAppointment";

export default function AppointmentContainer() {
  const { roomTarget } = useAppointment();
  console.log(roomTarget);
  return (
    <div className="flex flex-col justify-self-center py-12 px-20 bg-[#F1F5F9] gap-4 h-content overflow-auto">
      <div className="flex flex-col w-[80vw] bg-white rounded-xl p-8 mx-auto gap-4">
        <div>
          <DormTitleAppointment roomTarget={roomTarget} />
        </div>
        <div>
          <RoomCard
            rooms={roomTarget}
            isShowBtn={false}
            isShowBookBtn={false}
          />
        </div>
        <AppointmentForm />
      </div>
    </div>
  );
}
