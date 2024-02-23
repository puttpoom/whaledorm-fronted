import AppointmentItem from "./AppointmentItem";

export default function AppointmentList() {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold pt-12">รายการนัดหมายทั้งหมด</div>
      <div className="bg-white rounded-lg p-4">
        <header className="grid grid-cols-[2fr_3fr_1fr_1fr_1fr_2fr] bg-gray-100 border-b-2 text-sm font-semibold">
          <div className="pt-6">ชื่อผู้ติดต่อ</div>
          <div className="pt-6">รายละเอียดห้องพัก</div>
          <div className="pt-6">เบอร์โทร</div>
          <div className="pt-6">วันที่นัดหมาย</div>
          <div className="pt-6">เวลาที่่นัดหมาย</div>
          <div className="pt-6">สถานะ</div>
        </header>
        <AppointmentItem />
        <AppointmentItem />
        <AppointmentItem />
        <AppointmentItem />
        <AppointmentItem />
        <AppointmentItem />
        <AppointmentItem />
      </div>
    </div>
  );
}
