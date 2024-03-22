import Button from "../../../components/Button";
import DormTitle from "../../../components/DormTitle";
import DormFacilities from "../../../features/room/components/DormFacilities";

import RoomContainer from "../../../features/room/components/RoomContainer";
import GoogleMapsEmbed from "../../../components/GoogleMapFrame";
import GoogleMapDorm from "../../../components/GoogleMapDorm";
import useRoom from "../../../hooks/use-room";

export default function DormRoomContainer() {
  const { latLong } = useRoom();
  console.log(latLong);
  const lat = +latLong.split(",")[0];
  const long = +latLong.split(",")[1];

  return (
    <div className="h-content overflow-auto grid grid-cols-[8fr_2fr] justify-self-center py-12 px-20 bg-[#F1F5F9] gap-4">
      <div className="flex flex-col bg-white rounded-xl shadow-[0_1px_5px_rgb(0,0,0,0.1)] p-8">
        {/* Dorm Info */}
        <div className="flex flex-col gap-4">
          <DormTitle />
          <div className="flex-1">
            <GoogleMapDorm lat={lat} lng={long} zoom={18} />
          </div>
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
        <RoomContainer />
      </div>
      <div className="bg-white rounded-xl shadow-[0_1px_5px_rgb(0,0,0,0.1)] p-4">
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
        <div>item 4</div>
        <div>item 5</div>
      </div>
    </div>
  );
}
