import React from "react";
import FarFormLable from "./FarFormLable";
import VacantRoomLable from "./VacantRoomLable";
import { BadgeCheck, DoorOpen } from "lucide-react";

const mockData = {
  imgUrl:
    "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
  title: "หอพัก S9",
  distance: "ห่างออกไป 4.4 กม.",
  address: "ซ.วงศ์สว่าง 11 กรุงเทพ บางซื่อ",
  vancantNumbers: "มีห้องว่างจำนวน 3 ห้อง",
  createdAt: "ประกาศเมื่อวันที่ 16 ก.พ. 2567",
  priceRating: "2,800 - 5,000 / เดือน",
};

export default function DormCard() {
  return (
    <div className="grid  grid-cols-[2fr_8fr] gap-2 bg-white shadow-[0_1px_5px_rgb(0,0,0,0.1)] rounded-xl overflow-hidden">
      <img
        src={mockData.imgUrl}
        alt="imgRoom"
        className="object-cover w-full h-full"
      />
      <div className="grid grid-rows-4 items-center gap-[8px] p-4">
        <div className="text-[24px] font-semibold flex gap-2 items-center">
          <BadgeCheck color="#22d3ee" />
          {mockData.title}
        </div>
        <div className="flex items-center gap-2">
          <FarFormLable>{mockData.distance}</FarFormLable>
          <span>{mockData.address}</span>
        </div>
        <div className="inline-flex gap-2 items-center">
          <VacantRoomLable bgColor="green">
            <DoorOpen className="inline mr-1" size={20} />
            {mockData.vancantNumbers}
          </VacantRoomLable>
          <span className="text-sm text-gray-600">{mockData.createdAt}</span>
        </div>
        <div className="text-red-500 font-bold text-[20px]">
          {mockData.priceRating}
        </div>
      </div>
    </div>
  );
}
