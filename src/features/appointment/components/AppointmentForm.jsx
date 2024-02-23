import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";
import useAppointment from "../../../hooks/use-appointment";

export default function AppointmentForm() {
  const { userCreateAppointment, roomTarget } = useAppointment();

  const { dorm } = roomTarget;
  const dormName = dorm && dorm.dormName;
  const { id } = roomTarget;
  const { info } = roomTarget;
  const { title } = roomTarget;

  const initial = {
    dormName: dormName,
    roomId: id,
    title: title,
    fullName: "",
    phone: "",
    appointedDate: "",
    appointedTime: "",
  };

  const [input, setInput] = useState(initial);

  const handleChangeInput = (e) => {
    // setError(initial);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      dormName: dormName,
    });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await userCreateAppointment(input);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className="flex flex-row mt-6 gap-6">
      <div className="rounded-xl w-full h-auto">
        <img src="" alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            ชื่อหอพัก
            <Input name="dormName" value={dormName} disabled={true} />
          </div>
          <div>
            หมายเลขห้อง
            <Input name="roomNumber" value={id} disabled={true} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            รายละเอียดห้องพัก
            <Input name="dormName" value={title} disabled={true} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            ชื่อผู้ติดต่อ
            <Input
              name="fullName"
              value={input.name}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            เบอร์โทร
            <Input
              type="phone"
              name="phone"
              max={10}
              value={input.phone}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            วันที่ต้องการนัดหมาย
            <Input
              name="appointedDate"
              type="date"
              value={input.date}
              onChange={handleChangeInput}
            />
            {/* <Datetime /> */}
          </div>
          <div>
            เวลาที่ต้องการนัดหมาย
            <Input
              name="appointedTime"
              type="time"
              value={input.time}
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <div>
          {/* เพิ่มเติม
          <Input /> */}
          <Button color="bookBtn" textColor="white">
            ยืนยันการนัดหมาย
          </Button>
        </div>
      </div>
    </form>
  );
}
