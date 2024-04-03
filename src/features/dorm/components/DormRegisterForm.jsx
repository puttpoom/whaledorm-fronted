import React, { useEffect, useRef } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

import useDorm from "../../../hooks/use-dorm";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { registerDormSchema } from "./validations/validate-registerdorm";

export default function DormRegisterForm() {
  const { registerDorm } = useDorm();

  const InputDormImgEl = useRef();
  const ButtonSubmit = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(registerDormSchema),
    mode: "onSubmit",
  });
  /*
  const onSubmit = async (data) => {
    const dormInfo = new FormData();
    const dormFacilities = new FormData();

    if (data.dormName) {
      dormInfo.append("dormName", data.dormName);
    }
    if (data.phone) {
      dormInfo.append("phone", data.phone);
    }
    if (data.location) {
      dormInfo.append("location", data.location);
    }
    if (data.waterUnit) {
      dormInfo.append("waterUnit", data.waterUnit);
    }
    if (data.electricalUnit) {
      dormInfo.append("electricalUnit", data.electricalUnit);
    }

    if (data.isParking) {
      dormFacilities.append("isParking", data.isParking);
    }
    if (data.isKeyCard) {
      dormFacilities.append("isKeyCard", data.isKeyCard);
    }
    if (data.isLift) {
      dormFacilities.append("isLift", data.isLift);
    }
    if (data.isInternet) {
      dormFacilities.append("isInternet", data.isInternet);
    }

    console.log(data);
    console.log("submit");

    await registerDorm(dormInfo, dormFacilities);
  };
  */

  const onSubmit = async (data) => {
    const dormInfo = {
      dormName: data.dormName,
      phone: data.phone,
      distance: data.distance,
      location: data.location,
      waterUnit: data.waterUnit,
      electricalUnit: data.electricalUnit,
    };

    const dormFacilities = {
      isParking: data.isParking,
      isKeyCard: data.isKeyCard,
      isLift: data.isLift,
      isInternet: data.isInternet,
    };

    console.log(data);
    console.log("submit");

    await registerDorm(dormInfo, dormFacilities);
  };

  return (
    <div className="flex flex-col bg-[#F1F5F9] h-content overflow-auto pt-24 px-16">
      <p className="text-2xl font-semibold">Dorm Register</p>
      <div className=" bg-white rounded-md p-12">
        <form
          className="flex flex-col-2 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2 w-full">
            <p className="text-lg font-semibold">ข้อมูลหอพัก</p>
            <input
              type="file"
              className="hidden"
              ref={InputDormImgEl}
              errors={errors}
            />
            <Input
              name="dormName"
              placeholder="ชื่อหอพัก"
              register={register}
              errors={errors}
              className="w-full"
            />
            <Input
              max={10}
              name="phone"
              placeholder="เบอร์โทรศัพท์"
              register={register}
              errors={errors}
              className="w-full"
            />
            <Input
              max={2}
              name="distance"
              placeholder="ระยะห่าง"
              register={register}
              errors={errors}
              className="w-full"
            />
            <textarea
              placeholder="ที่อยู่"
              rows={2}
              className="p-4 border border-blue-300 rounded-lg focus:outline-2 outline-blue-200 w-full"
              {...register("location")}
            />
            {errors.location && (
              <div className="text-sm text-red-500">
                {errors?.location.message}
              </div>
            )}
            <Input
              name="waterUnit"
              placeholder="ค่าน้ำต่อหน่วย"
              register={register}
              errors={errors}
              className="w-full"
            />
            <Input
              name="electricalUnit"
              placeholder="ค่าไฟฟ้าต่อหน่วย"
              register={register}
              errors={errors}
              className="w-full"
            />
            {/* <Button
            // buttonType="button"
            onClick={() => InputDormImgEl.current.click()}
            className=" text-white bg-blue-500"
            register={{ ...register("dormImages") }}
            errors={errors}
          >
            อัพโหลดรูปหอพัก
          </Button> */}
          </div>
          {/* ----- */}
          <div className="w-full">
            <p className="text-lg font-semibold">สิ่งอำนวยความสะดวก</p>
            <Input
              type="checkbox"
              name="isParking"
              className="size-4"
              register={register}
              errors={errors}
              textTitle="ที่จอดรถ"
            />
            <Input
              type="checkbox"
              name="isKeyCard"
              register={register}
              errors={errors}
              className="size-4"
              textTitle="คีย์การ์ด"
            />
            <Input
              type="checkbox"
              name="isLift"
              register={register}
              errors={errors}
              className="size-4"
              textTitle="ลิฟท์"
            />
            <Input
              type="checkbox"
              name="isInternet"
              register={register}
              errors={errors}
              className="size-4"
              textTitle="อินเทอร์เน็ต"
            />
            <Input
              type="checkbox"
              name="isLundary"
              register={register}
              errors={errors}
              className="size-4"
              textTitle="เครื่องซักผ้าหยอดเหรียญ"
            />
            <Input
              type="checkbox"
              name="isWaterDispenser"
              register={register}
              errors={errors}
              className="size-4"
              textTitle="ตู้กดน้ำหยอดเหรียญ"
            />
            <Input
              type="checkbox"
              name="isMart"
              register={register}
              errors={errors}
              className="size-4"
              textTitle="ร้านสะดวกซื้อ"
            />
          </div>
          <button className="text-white bg-blue-900 hidden" ref={ButtonSubmit}>
            สมัครหอพัก
          </button>
        </form>
        <Button
          buttonType="submit"
          className="text-white bg-blue-900 w-48 m-auto mt-4"
          onClick={() => ButtonSubmit.current.click()}
        >
          สมัครหอพัก
        </Button>
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
