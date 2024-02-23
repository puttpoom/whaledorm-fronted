import VacantDorm from "../features/dorm/components/VacantDorm";
import DormContextProvider from "../features/dorm/contexts/DormContext";
import GoogleMapFrame from "../components/GoogleMapFrame";
import RoomContextProvider from "../features/room/contexts/RoomContext";

export default function HomePage() {
  return (
    <div className="grid bg-[#F1F5F9]">
      <DormContextProvider>
        <RoomContextProvider>
          <GoogleMapFrame />
        </RoomContextProvider>
        <VacantDorm />
      </DormContextProvider>
    </div>
  );
}
