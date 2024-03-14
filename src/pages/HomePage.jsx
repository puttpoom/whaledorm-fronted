import VacantDorm from "../features/dorm/components/VacantDorm";
import DormContextProvider from "../features/dorm/contexts/DormContext";
import GoogleMapFrame from "../components/GoogleMapFrame";
import CountContainer from "../components/CountContainer";
import RoomContextProvider from "../features/room/contexts/RoomContext";

export default function HomePage() {
  return (
    <div className="grid bg-[#F1F5F9] grid-flow-row items-center justify-center h-content overflow-auto">
      <DormContextProvider>
        <RoomContextProvider>
          <div className="flex flex-col text-5xl font-bold text-center pt-12 py-8 gap-4">
            <div>
              <span>
                ค้นหาหอพัก <span className="text-[#1A8E10]">“ที่ว่างอยู่”</span>{" "}
                บริเวณ
              </span>
            </div>
            <div>
              <span>โดยรอบมหาวิทยาลัย</span>
            </div>
          </div>
          <div className="w-[60vw] mx-auto">
            <GoogleMapFrame />
          </div>
          {/* <CountContainer /> */}
        </RoomContextProvider>
        <VacantDorm />
      </DormContextProvider>
    </div>
  );
}
