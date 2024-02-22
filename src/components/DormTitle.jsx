import { BadgeCheck } from "lucide-react";
import FarFormLable from "./FarFormLable";
import useRoom from "../hooks/use-room";

const mockData = {
  dormImages:
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
  dormName: "หอพัก",
  distance: "ห่างออกไป 0 กม.",
  location: "ที่อยู่",
  vancantNumbers: "มีห้องว่างจำนวน 0 ห้อง",
  createdAt: "ประกาศล่าสุดเมื่อ",
  priceRating: "0 บาท/เดือน",
};

export default function DormTitle() {
  const { dormRoom } = useRoom();
  console.log(dormRoom);
  return (
    <div className="flex flex-col gap-2">
      <div className="text-[24px] font-semibold flex gap-2 items-center">
        {dormRoom.isVerify === "VERIFY" ? <BadgeCheck color="#22d3ee" /> : null}
        {dormRoom.dormName || mockData.title}
      </div>
      <div className="flex items-center gap-2">
        <FarFormLable>
          ห่างออกไป {dormRoom.distance || mockData.distance} กม.
        </FarFormLable>
        <span>{dormRoom.location || mockData.location}</span>
      </div>
    </div>
  );
}
