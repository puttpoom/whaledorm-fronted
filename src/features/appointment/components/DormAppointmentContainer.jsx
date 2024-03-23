import { useContext } from "react";
import AppointmentItem from "./AppointmentItem";
import { AppointmentContext } from "../contexts/AppointmentContext";
import useAuth from "../../../hooks/use-auth";

export default function DormAppointmentContainer() {
  const { authUser } = useAuth();
  const { dormAppointments } = useContext(AppointmentContext);
  console.log(dormAppointments);
  return (
    <div className="bg-[#F1F5F9] px-20 h-content">
      <div className="flex flex-col">
        <div className="text-2xl font-semibold pt-12 pb-2">{`รายการนัดหมายทั้งหมดของหอพัก ${authUser.dorms.dormName}`}</div>
        <div className="bg-white rounded-lg p-4">
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead>
                <tr className="bg-gray-100 border-b-2 text-sm font-semibold text-left">
                  <th class="pt-4">ชื่อผู้ติดต่อ</th>
                  <th class="pt-4">เบอร์โทร</th>
                  <th class="pt-4">รายละเอียดห้องพัก</th>
                  <th class="pt-4">วันที่นัดหมาย</th>
                  <th class="pt-4">เวลาที่่นัดหมาย</th>
                  <th class="pt-4">สถานะ</th>
                </tr>
              </thead>
              <tbody>
                {dormAppointments.map((appointment) => (
                  <AppointmentItem
                    key={appointment.id}
                    appointment={appointment}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <header className="grid grid-cols-[2fr_3fr_1fr_1fr_1fr_2fr] bg-gray-100 border-b-2 text-sm font-semibold">
  <div className="pt-6">ชื่อผู้ติดต่อ</div>
  <div className="pt-6">รายละเอียดห้องพัก</div>
  <div className="pt-6">เบอร์โทร</div>
  <div className="pt-6">วันที่นัดหมาย</div>
  <div className="pt-6">เวลาที่่นัดหมาย</div>
  <div className="pt-6">สถานะ</div>
</header>; */
}
