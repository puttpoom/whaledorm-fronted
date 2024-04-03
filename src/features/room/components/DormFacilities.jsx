import {
  CreditCard,
  Store,
  SeparatorVertical,
  Wifi,
  Cctv,
  WashingMachine,
  Droplets,
} from "lucide-react";
import useRoom from "../../../hooks/use-room";
const gap = "flex gap-2";
export default function DormFacilities() {
  const { dormFacilities } = useRoom();
  // console.log(dormFacilities);
  return (
    <div className="flex flex-col">
      <div className="flex text-2xl font-semibold">
        สิ่งอำนวยความสะดวกส่วนกลาง
      </div>
      <div className="flex flow">
        <div className="grid grid-cols-2 gap-2 grid-flow-row p-4 w-full text-md items-center text-gray-800">
          {dormFacilities?.isKeyCard ? (
            <span className={gap}>
              <CreditCard className="inline" size={22} />
              <span>คีย์การ์ด</span>
            </span>
          ) : null}

          {dormFacilities?.isLift ? (
            <span className={gap}>
              <SeparatorVertical className="inline" size={22} />
              <span>ลิฟท์</span>
            </span>
          ) : null}

          {dormFacilities?.isInternet ? (
            <span className={gap}>
              <Wifi className="inline" size={22} />
              <span>อินเตอร์เน็ต</span>
            </span>
          ) : null}

          {dormFacilities?.isCCTV ? (
            <span className={gap}>
              <Cctv className="inline" size={22} />
              <span>กล้องวงจรปิด</span>
            </span>
          ) : null}

          {dormFacilities?.isLundary ? (
            <span className={gap}>
              <WashingMachine className="inline" size={22} />
              <span>เครื่องซักผ้าหยอดเหรียญ</span>
            </span>
          ) : null}

          {dormFacilities?.isWaterDispenser ? (
            <span className={gap}>
              <Droplets className="inline" size={22} />
              <span>ตู้กดน้ำหยอดเหรียญ</span>
            </span>
          ) : null}

          {dormFacilities?.isMart ? (
            <span className={gap}>
              <Store className="inline" size={22} />
              <span>ร้านขายของชำ</span>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
