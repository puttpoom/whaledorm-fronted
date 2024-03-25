import React, { useRef } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

import useDorm from "../../../hooks/use-dorm";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { registerDormSchema } from "./validations/validate-registerdorm";

const initial = {};

/*
{
    "dorm": {
                "dormName": "s9",
                "phone": "0123456789",
                "dormImages": "https://images.pexels.com/photos/3663530/pexels-photo-3663530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                "latLong": null,
                "location": "s9 แขวงวงศ์สว่าง เขตบางซื่อ 10800",
                "distance": "2.1",
                "electricalUnit": 4,
                "waterUnit": 10,
                "isVerify": "PEDNING"
    },
    "dormFacilities":{
                "isParking": false,
                "isKeyCard": true,
                "isLift": true,
                "isInternet": true,
                "isCCTV": true,
                "isLundary": true,
                "isWaterDispenser": true,
                "isMart": false
    }
}
*/

export default function CreateRoomForm() {
  const InputDormImgEl = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(registerDormSchema),
  });

  const handleSubmitForm = async (data) => {
    const formData = new FormData();
    formData.append("dormName", data.dormName);
    formData.append("phone", data.phone);
    formData.append("location", data.location);
    formData.append("waterUnit", data.waterUnit);
    formData.append("electricalUnit", data.electricalUnit);
    // formData.append("dormImages", data.dormImages[0]);
  };

  return (
    <div className="flex flex-col bg-[#F1F5F9] h-content overflow-auto pt-24 px-16">
      <div className=" bg-white rounded-md p-16">
        <form
          className="flex flex-col gap-2 w-[30vw]"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          Dorm Register
          <input type="file" className="hidden" ref={InputDormImgEl} />
          <Input
            name="dormName"
            placeholder="ชื่อหอพัก"
            register={register("dormName")}
          />
          <Input
            name="phone"
            placeholder="เบอร์โทรศัพท์"
            register={register("phone")}
          />
          <textarea
            name="location"
            placeholder="ที่อยู่"
            rows={2}
            className="p-4 border border-blue-300 rounded-lg focus:outline-2 outline-blue-200"
            register={register("location")}
          />
          <Input
            name="waterUnit"
            placeholder="ค่าน้ำต่อหน่วย"
            register={register("waterUnit")}
          />
          <Input
            name="electricalUnit"
            placeholder="ค่าไฟฟ้าต่อหน่วย"
            register={register("electricalUnit")}
          />
          <Button
            type="button"
            onClick={() => InputDormImgEl.current.click()}
            className=" text-white bg-blue-500"
            register={{ ...register("dormImages") }}
          >
            อัพโหลดรูปหอพัก
          </Button>
          <Button
            type="submit"
            // onClick={() => InputDormImgEl.current.click()}
            className=" text-white bg-blue-900"
          >
            สมัครหอพัก
          </Button>
        </form>
      </div>
      {/* <form className="grid gap-4 min-w-[80vw]">
        <Input placeholder="เลขที่ห้อง" />
        <Input placeholder="ข้อมูล" />
        <Input type="file" />
        <Input placeholder="size" />
      </form> */}
    </div>
  );
}
