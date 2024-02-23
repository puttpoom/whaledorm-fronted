import FarFormLable from "../../../components/FarFormLable";

export default function DormTitleAppointment({ roomTarget }) {
  const { dorm } = roomTarget;
  const dormName = dorm && dorm.dormName;
  const isVerify = dorm && dorm.isVerify;
  const location = dorm && dorm.location;
  const distance = dorm && dorm.distance;

  console.log(distance);

  return (
    <div>
      <div className="flex flex-col gap-2">
        <div className="text-[24px] font-semibold flex gap-2 items-center">
          {isVerify === "VERIFY" ? <BadgeCheck color="#22d3ee" /> : null}
          {dormName || null}
        </div>
        <div className="flex items-center gap-2">
          <FarFormLable>ห่างออกไป {distance || null} กม.</FarFormLable>
          <span>{location || null}</span>
        </div>
      </div>
    </div>
  );
}
