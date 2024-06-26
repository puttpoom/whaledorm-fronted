import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAppointment from "../../../hooks/use-appointment";
import useAuth from "../../../hooks/use-auth";
import Carousel from "../../../components/Carousel";
import GoogleMapDorm from "../../../components/GoogleMapDorm";
import useRoom from "../../../hooks/use-room";
import GoogleMapAppointment from "../../map/components/GoogleMapAppointment";
import { useForm } from "react-hook-form";

export default function AppointmentForm({ room }) {
  const navigate = useNavigate();
  const { authUser } = useAuth();
  const { userCreateAppointment, roomTarget } = useAppointment();

  const { dorm } = roomTarget;
  const dormName = dorm && dorm.dormName;
  const dormId = dorm && dorm.id;
  console.log(dormId, "dormIaaaaaad");

  const { id } = roomTarget;
  const { title } = roomTarget;

  const initial = {
    roomId: -1,
    title: "",
    fullName: "",
    phone: "",
    appointedDate: "",
    appointedTime: "",
  };

  const [input, setInput] = useState(initial);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const handleChangeInput = (e) => {
    // setError(initial);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      roomId: id,
      title: title,
      dormId: dormId,
    });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await userCreateAppointment(input);
      // navigate(`/user/appointments/${authUser.id}`);
      if (authUser.role != "DORM") {
        navigate(`/user/appointments/${authUser.id}`);
      } else {
        navigate("/dorm/appointments");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmitForm} className="flex flex-row mt-6 gap-6">
      <div className="rounded-xl w-[50vw] h-auto">
        <img src="" alt="" />
        <GoogleMapAppointment dormId={dormId} />
        {/* <Carousel /> */}
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            ชื่อหอพัก
            <Input
              name="dormName"
              value={dormName}
              disabled={true}
              register={register}
              className="w-full"
            />
          </div>
          <div>
            หมายเลขห้อง
            <Input
              name="roomNumber"
              value={id}
              disabled={true}
              register={register}
              className="w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div>
            รายละเอียดห้องพัก
            <Input
              name="dormName"
              value={title}
              disabled={true}
              register={register}
              className="w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            ชื่อผู้ติดต่อ
            <Input
              name="fullName"
              value={input.name}
              onChange={handleChangeInput}
              register={register}
              className="w-full"
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
              register={register}
              className="w-full"
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
              register={register}
              className="w-full"
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
              register={register}
              className="w-full"
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
