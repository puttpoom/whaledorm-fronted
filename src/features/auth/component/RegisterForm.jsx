//icon
import { Building, User } from "lucide-react";

//components
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import ErrorText from "./ErrorText";

//middlewares
import registerSchema from "../validations/validate-register";

import { useEffect, useState, useRef } from "react";

//hook
import useAuth from "../../../hooks/use-auth";

const initial = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  role: "",
};

export default function RegisterForm() {
  const registerFormEl = useRef(null);
  const [input, setInput] = useState(initial);
  const [error, setError] = useState(initial);

  const {
    register,
    isOpenRegisterForm,
    setIsOpenRegisterForm,
    setIsOpenLoginForm,
  } = useAuth();

  useEffect(() => {
    if (isOpenRegisterForm) {
      const handleClickOutside = (e) => {
        if (
          registerFormEl.current &&
          !registerFormEl.current.contains(e.target)
        ) {
          console.log("close RegisterForm");
          setIsOpenRegisterForm(false);
        }
      };
      document.addEventListener("mouseup", handleClickOutside);
      return () => document.removeEventListener("mouseup", handleClickOutside);
    }
  }, [isOpenRegisterForm]);

  // console.log(error);
  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const validateError = registerSchema(input); //! Must try *** 3stars for reusing valid logic
      if (validateError) {
        console.log(validateError);
        return setError(validateError);
      }

      await register(input);
    } catch (error) {
      console.log(error);
      if (error.response?.data.message === "EMAIL_IN_USE") {
        return setError({
          email: "email address already in used",
        });
      }
      // toast.error("Internal server error");
    }
  };

  const handleChangeInput = (e) => {
    setError(initial);
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <form
      onSubmit={handleSubmitForm}
      className="justify-self-center fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75"
    >
      <div
        ref={registerFormEl}
        className=" bg-white shadow-[0_0_15px_rgb(0,0,0,0.2)] rounded-md w-[560px] px-12 py-8 flex flex-col gap-4 content-center"
      >
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">สร้างบัญชีผู้ใช้</h2>
          <div>
            <span>อีเมล</span>
            <Input
              name="email"
              value={input.email}
              placeholder="example@email.com"
              onChange={handleChangeInput}
            />
            <ErrorText message={error.email} />
          </div>
          <div>
            <div className="flex justify-between">
              <span>รหัสผ่าน</span>
              {/* <span className="text-sm text-blue-500">ลืมรหัสผ่าน?</span> */}
            </div>
            <Input
              name="password"
              type="password"
              value={input.password}
              onChange={handleChangeInput}
              placeholder="กรอกรหัสผ่านของคุณ"
            />
            <ErrorText message={error.password} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span>ชื่อ</span>
              <Input
                name="firstName"
                onChange={handleChangeInput}
                value={input.firstName}
              />
              <ErrorText message={error.firstName} />
            </div>
            <div>
              <span>นามสกุล</span>
              <Input
                name="lastName"
                onChange={handleChangeInput}
                value={input.lastName}
              />
              <ErrorText message={error.lastName} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="USER"
                checked={input.role === "USER"}
                onChange={handleChangeInput}
              />
              <User size={20} className="inline mx-1" />
              ผู้ใช้งานทั่วไป
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="role"
                value="DORM"
                checked={input.role === "DORM"}
                onChange={handleChangeInput}
              />
              <Building size={20} className="inline mx-1" />
              หอพัก
            </label>
            <ErrorText message={error.role} />
          </div>
          <div className="grid gap-2">
            <Button color="blue" text="white" width="full">
              สร้างบัญชีผู้ใช้
            </Button>
            {/* <Button color="blue" text="white" width="full">
              ลงทะเบียนหอพัก
            </Button> */}
          </div>
          <div className="flex gap-2 justify-center">
            <span className="text-sm text-gray-400">
              มีบัญชีผู้ใช้อยู่แล้ว?
            </span>
            <div
              onClick={(e) => {
                setIsOpenRegisterForm(false);
                setIsOpenLoginForm(true);
              }}
              role="button"
              className="text-sm text-blue-500 underline"
            >
              ลงชื่อเข้าใช้
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
