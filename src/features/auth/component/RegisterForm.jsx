import Button from "../../../components/Button";
import Input from "../../../components/Input";
import registerSchema from "../validations/validate-register";

import { useState } from "react";
import useAuth from "../../../hooks/use-auth";
import ErrorText from "./ErrorText";

const initial = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
};

export default function RegisterForm() {
  const [input, setInput] = useState(initial);
  const [error, setError] = useState(initial);

  const { register } = useAuth();

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
    <div className="bg-white shadow-[0_0_15px_rgb(0,0,0,0.2)] rounded-md w-[560px] px-12 py-8 flex flex-col gap-4 content-center">
      <form className="flex flex-col gap-4" onSubmit={handleSubmitForm}>
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
            <span className="text-sm text-blue-500">ลืมรหัสผ่าน?</span>
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
            <span>สกุล</span>
            <Input
              name="lastName"
              onChange={handleChangeInput}
              value={input.lastName}
            />
            <ErrorText message={error.lastName} />
          </div>
        </div>
        <div>
          <Button color="blue" text="white" width="full">
            สมัครสมาชิก
          </Button>
        </div>
        <div className="flex gap-2 justify-center">
          <span className="text-sm text-gray-400">มีบัญชีผู้ใช้อยู่แล้ว?</span>
          <span className="text-sm text-blue-500 underline">ลงชื่อเข้าใช้</span>
        </div>
      </form>
    </div>
  );
}
