import Button from "../components/Button";
import DormTitle from "../components/DormTitle";
import DormFacilities from "../features/room/components/DormFacilities";
import RoomContextProvider from "../features/room/contexts/RoomContext";

export default function DormRoomPage() {
  return (
    <div className="w-[100vw] grid grid-cols-[8fr_2fr] justify-self-center py-12 px-20 bg-[#F1F5F9] gap-4">
      <div className="grid grid-rows-2 bg-white rounded-xl shadow-[0_1px_5px_rgb(0,0,0,0.1)] p-8">
        {/* Dorm Info */}
        <div className="flex flex-col gap-6">
          <DormTitle />
          <div>MAP API</div>
          <div className=" grid grid-cols-[6fr_4fr]">
            <DormFacilities />
            <div className="grid grid-flow-row items-center content-center gap-2 justify-self-stretch">
              <Button color="green" text="white" width="full">
                0123456xxx
              </Button>
              <Button color="red2" text="white" width="full">
                รายงานหอพัก
              </Button>
              <span className="text-red-600 text-sm text-center">
                Warning...
              </span>
            </div>
          </div>
        </div>
        {/* Dorm Vacant Rooms  */}
        <div>Dorm Vacant Rooms</div>
      </div>
      <div className="bg-white rounded-xl shadow-[0_1px_5px_rgb(0,0,0,0.1)]">
        <div>Left Side Dorm Rooms</div>
        <div>Left Side Dorm Rooms</div>
        <div>Left Side Dorm Rooms</div>
        <div>Left Side Dorm Rooms</div>
        <div>Left Side Dorm Rooms</div>
      </div>
    </div>
  );
}
