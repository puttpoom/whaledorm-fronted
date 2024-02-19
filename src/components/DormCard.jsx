import React, { useEffect } from "react";
import FarFormLable from "./FarFormLable";
import VacantRoomLable from "./VacantRoomLable";
import { BadgeCheck, DoorOpen } from "lucide-react";
import { Link } from "react-router-dom";

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

export default function DormCard({ dorm, max, min, onClick }) {
  return (
    <div className="grid grid-cols px-8 py-2 w-[80vw] justify-self-center">
      <div
        onClick={(e) => console.log(dorm.id)}
        className="grid grid-cols-[3fr_7fr] gap-2 bg-white shadow-[0_1px_5px_rgb(0,0,0,0.1)] rounded-xl overflow-hidden"
      >
        <img
          src={dorm.dormImages ? dorm.dormImages : mockData.dormImages}
          alt="imgRoom"
          className="object-center w-full h-[200px]"
        />
        <div className="grid grid-rows-4 items-center gap-[8px] p-4">
          <div className="text-[24px] font-semibold flex gap-2 items-center">
            <BadgeCheck color="#22d3ee" />
            {dorm.dormName || mockData.title}
          </div>
          <div className="flex items-center gap-2">
            <FarFormLable>
              ห่างออกไป {dorm.distance || mockData.distance} กม.
            </FarFormLable>
            <span>{dorm.location || mockData.location}</span>
          </div>
          <div className="inline-flex gap-2 items-center">
            <VacantRoomLable bgColor="green">
              <DoorOpen className="inline mr-1" size={20} />
              มีห้องว่างจำนวน {dorm.totalVacantRoom ||
                mockData.vancantNumbers}{" "}
              ห้อง
            </VacantRoomLable>
            <span className="text-sm text-gray-600">
              {dorm.createdAt || mockData.createdAt}
            </span>
          </div>
          <div className="text-red-500 font-bold text-[20px]">
            {min(dorm.room)}{" "}
            {dorm.room.length > 1 ? "-" + " " + max(dorm.room) : null} บาท/เดือน
          </div>
        </div>
      </div>
    </div>
  );
}
