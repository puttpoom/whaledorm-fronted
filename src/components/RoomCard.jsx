import Button from "./Button";
import { CalendarFold } from "lucide-react";
import { Link } from "react-router-dom";
import RoomFacilities from "./RoomFacilities";

export default function RoomCard({ rooms }) {
  // const navigate = useNavigate();
  // const handleOnClickLinkToAppointmentPageByRoomId = (roomId) => {
  //   return navigate(`/dorm/rooms/appointment/${roomId}`);

  const formatPrice = (price) => {
    return price.toLocaleString("th-TH");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="bg-[#F4F4F4] w-full grid grid-cols-[2fr_4fr_4fr] h-fit rounded-xl overflow-hidden shadow-[0_1px_1px_rgb(0,0,0,0.2)]">
      <img
        src={rooms.roomImages}
        alt="room_images"
        className="object-center w-auto h-full"
      />
      <div className="grid grid-rows justify-self-stretch items-center p-4 gap-2">
        <span className="text-xl font-semibold">{rooms.title}</span>
        <span className="text-sm text-gray-800">
          Dorm - ประกาศเมื่อวันที่ {formatDate(rooms.createdAt)}
        </span>
        <span className="text-red-500 font-bold text-[18px]">
          {formatPrice(rooms.price)} บาท/เดือน
        </span>
        <span className="flex w-[15vw] justify-center items-center">
          <Link to={`/appointment/${rooms.id}`}>
            <Button
              color="bookBtn"
              text="white"
              textSize="sm"
              width="full"
              className="w-[20vw]"
            >
              นัดเวลาดูห้องพักนี้
              <CalendarFold size={18} />
            </Button>
          </Link>
        </span>
      </div>
      <div className="border-l border-dashed p-4 items-center text-center">
        <span className="font-semibold">สิ่งอำนวยความสะดวกภายในห้อง</span>
        <RoomFacilities roomFacilities={rooms.roomFacilities || {}} />
      </div>
    </div>
  );
}
