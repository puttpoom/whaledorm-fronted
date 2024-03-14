import Button from "./Button";
import { CalendarFold, Clock, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import useAppointment from "../../src/hooks/use-appointment";
import RoomFacilities from "./RoomFacilities";

export default function RoomCard({
  appointmentId,
  rooms,
  isShowBookBtn = true,
  isShowDeleteBtn = false,
  isShowStatusAppointmnetBtn = false,
  statusBtn,
  appointedDate,
  appointedTime,
}) {
  const { userDeleteAppointment } = useAppointment();

  const checkStatus = (statusBtn) => {
    switch (statusBtn) {
      case "PEDNING":
        // let pendening = "pendingBtn";
        return (
          <>
            <p className="flex items-center gap-2">
              รอการตอบรับ <Clock className="inline" size={18} />
            </p>
          </>
        );
      case "ACCEPTED":
        // let accepted = "approveBtn";
        return (
          <p className="flex items-center gap-2">
            ตอบรับแล้ว <CheckSquare className="inline" size={18} />
          </p>
        );
      case "REJECTED":
        // let rejected = "cancledBtn";
        return (
          <p className="flex items-center gap-2">
            ถูกปฏิเสธ <Ban className="inline" size={18} />
          </p>
        );
      default:
        return <p>null</p>; // Or any other default behavior/message
    }
  };

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
    <div className="bg-[#F4F4F4] w-full grid grid-cols-[2fr_4fr_4fr] h-fit rounded-xl overflow-hidden shadow-[0_1px_1px_rgb(0,0,0,0.2)] flex-shrink-0">
      <img
        src={rooms.roomImages}
        alt="room_images"
        className="object-center w-auto h-full"
      />
      <div className="grid grid-rows justify-self-stretch items-center p-4 gap-2">
        <span className="text-xl font-semibold">{rooms.title}</span>
        <span className="text-sm text-gray-800">
          {appointedDate
            ? `วันและเวลาที่นัดหมาย: ${formatDate(
                appointedDate
              )} — ${appointedTime}`
            : `Dorm - ประกาศเมื่อวันที่ ${formatDate(rooms.createdAt)}`}
        </span>
        <span className="text-red-500 font-bold text-[18px]">
          {formatPrice(rooms.price)} บาท/เดือน
        </span>
        <span className="flex w-fit justify-center items-center">
          <Link to={`/dorm/rooms/appointment/${rooms.id}`}>
            {isShowBookBtn ? (
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
            ) : null}
          </Link>
          <div className="flex gap-2">
            {isShowStatusAppointmnetBtn ? (
              <Button
                color={statusBtn}
                text="white"
                textSize="sm"
                width="full"
                className="w-[20vw] "
              >
                {checkStatus(statusBtn)}
              </Button>
            ) : null}
            {isShowDeleteBtn ? (
              <Button
                color="red2"
                text="white"
                textSize="sm"
                width="full"
                className="w-[20vw]"
                onClick={() => userDeleteAppointment(appointmentId)}
              >
                ยกเลิก
                <Trash2 size={18} />
              </Button>
            ) : null}
          </div>
        </span>
      </div>
      <div className="border-l border-dashed p-4 items-center text-center">
        <span className="font-semibold">สิ่งอำนวยความสะดวกภายในห้อง</span>
        <RoomFacilities roomFacilities={rooms.roomFacilities || {}} />
      </div>
    </div>
  );
}
