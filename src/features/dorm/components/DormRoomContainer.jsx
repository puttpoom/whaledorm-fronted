import Button from "../../../components/Button";
import DormTitle from "../../../components/DormTitle";
import DormFacilities from "../../../features/room/components/DormFacilities";

import RoomContainer from "../../../features/room/components/RoomContainer";
import GoogleMapsEmbed from "../../../components/GoogleMapFrame";
import GoogleMapDorm from "../../../components/GoogleMapDorm";
import useRoom from "../../../hooks/use-room";
import { Link } from "react-router-dom";

export default function DormRoomContainer() {
  const { vacantRooms, dormRoom } = useRoom();
  const { latLong } = useRoom();

  // console.log(vacantRooms, vacantRooms.length, "VacantRooms");
  const vacantRoomsNotOnDormRoomPage = vacantRooms.filter(
    (room) => room.dorm.id !== dormRoom.id
  );

  // console.log(latLong);
  const lat = +latLong.split(",")[0];
  const long = +latLong.split(",")[1];

  return (
    <div className="h-content overflow-auto grid grid-cols-[8fr_2fr] justify-self-center py-12 px-20 bg-[#F1F5F9] gap-4 max-lg:grid-cols-1">
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
      <div className="bg-white rounded-xl shadow-[0_1px_5px_rgb(0,0,0,0.1)] max-lg:hidden overflow-hidden">
        <div>
          {vacantRoomsNotOnDormRoomPage.slice(0, 16).map((room) => (
            <Link to={`/dorm/rooms/appointment/${room.id}`} key={room.id}>
              <div className="flex gap-2 p-2 border-b hover:bg-[#F4F4F4]">
                <img
                  src={room.roomImages}
                  alt=""
                  className="size-24 rounded-lg"
                />
                <div className="flex flex-col gap-2 justify-center">
                  <span className="font-semibold">{room.dorm.dormName}</span>
                  <span className="text-sm line-clamp-1">{room.title}</span>
                  <span className="text-sm">{room.price} บาท/เดือน</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
