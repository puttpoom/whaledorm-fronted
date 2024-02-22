import {
  AirVent,
  Bed,
  Fan,
  LampDesk,
  ShowerHead,
  Utensils,
} from "lucide-react";

export default function RoomFacilities({ roomFacilities }) {
  return (
    <div className="grid grid-cols-2 gap-2 grid-flow-row p-4 w-full text-sm text-start text-gray-800">
      {roomFacilities.isAir === "AIRCONDITION" ? (
        <span className="flex gap-2 content-baseline">
          <AirVent className="inline" size={20} />
          เครื่องปรับอากาศ
        </span>
      ) : (
        <span className="flex gap-2 content-baseline">
          <Fan className="inline" size={20} />
          พัดลม
        </span>
      )}

      {roomFacilities.isFurniture ? (
        <span className="flex gap-2 content-baseline">
          <Bed className="inline" size={20} />
          เตียง / ตู้เสื้อผ้า
        </span>
      ) : null}

      {roomFacilities.isSink ? (
        <span className="flex gap-2 content-baseline">
          <Utensils className="inline" size={20} />
          อ่างล้างจาน
        </span>
      ) : null}

      {roomFacilities.isTable ? (
        <span className="flex gap-2 content-baseline">
          <LampDesk className="inline" size={20} />
          โต๊ะอ่านหนังสือ
        </span>
      ) : null}

      {roomFacilities.isWaterHeater ? (
        <span className="flex gap-2 content-baseline">
          <ShowerHead className="inline" size={20} />
          เครื่องทำน้ำอุ่น
        </span>
      ) : null}
    </div>
  );
}
