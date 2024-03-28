import { useState, useRef, useEffect } from "react";

//icon
import { Eye, EyeOff } from "lucide-react";

//custom-hook
import useAuth from "../../../hooks/use-auth";

//components
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import ErrorText from "../component/ErrorText";

//middleWares
import validateLogin from "../validations/validate-login";
import MySwal from "../../../utills/sweetaleart";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import * as authApi from "../../../api/auth";
import { storeToken } from "../../../utills/local-storage";

const initial = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const logInFormEl = useRef(null);
  const [input, setInput] = useState(initial);
  const [error, setError] = useState({});
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    login,
    setIsOpenLoginForm,
    isOpenLoginForm,
    setIsOpenRegisterForm,
    googleLogin,
    setAuthUser,
    googleUser,
    authUser,
    googleToken,
    fetchGoogleAuth,
  } = useAuth();

  useEffect(() => {
    if (isOpenLoginForm) {
      const handleClickOutside = (e) => {
        console.log(e);
        if (logInFormEl.current && !logInFormEl.current.contains(e.target)) {
          console.log("close LoginForm");
          setIsOpenLoginForm(false);
        }
      };
      document.addEventListener("mouseup", handleClickOutside);
      return () => document.removeEventListener("mouseup", handleClickOutside);
    }
  }, [isOpenLoginForm]);

  const handleChangeInput = (e) => {
    setError(initial);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault(); //! prevent default reqest to server from browser
      const validationError = validateLogin(input);
      if (validationError) {
        return setError(validationError);
      }
      await login(input);
      setIsOpenLoginForm(false);
      console.log("Login successfully");
    } catch (err) {
      console.log(err);

      MySwal.fire({
        position: "center",
        icon: "error",
        title: `${err?.response.data.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleShowPassword = (e) => {
    setIsShowPassword((prv) => !prv);
  };

  //when success google res token
  const handleGoogleLoginSuccess = async (res) => {
    try {
      console.log(res);
      await googleLogin(res);
      setIsOpenLoginForm(false);
      // console.log(profile);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoogleLoginError = (err) => {
    console.log(err);
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="justify-self-center fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 w-full z-10"
    >
      <div
        ref={logInFormEl}
        className="bg-white shadow-[0_0_15px_rgb(0,0,0,0.2)] rounded-md w-[560px] px-12 py-8 flex flex-col gap-4 content-center"
      >
        <h2 className="text-2xl font-bold">ลงชื่อเข้าใช้</h2>
        <div>
          <span>อีเมล</span>
          <Input
            onChange={handleChangeInput}
            name="email"
            placeholder="example@email.com"
          />
          <ErrorText message={error.email} />
        </div>
        <div>
          <div className="flex justify-between">
            <span>รหัสผ่าน</span>
            <span className="text-sm text-blue-500">ลืมรหัสผ่าน ?</span>
          </div>
          <div className="relative">
            <Input
              onChange={handleChangeInput}
              name="password"
              placeholder="Enter your Password"
              type={isShowPassword ? "text" : "password"}
            />
            <span
              role="button"
              className="absolute right-3 bottom-3"
              onClick={handleShowPassword}
            >
              {isShowPassword ? <Eye size={16} /> : <EyeOff size={16} />}
            </span>
          </div>

          <ErrorText message={error.password} />
        </div>
        <div className="flex flex-col items-center gap-4">
          <Button color="blue" text="white" width="full">
            ลงชื่อเข้าใช้
          </Button>
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
          />
          <div className="flex text-sm gap-2">
            <div className="text-gray-400">ยังไม่มีบัญชีผู้ใช้ ?</div>
            <div
              onClick={(e) => {
                setIsOpenRegisterForm(true);
                setIsOpenLoginForm(false);
              }}
              className="underline text-blue-500 text-sm"
              role="button"
            >
              สร้างบัญชีผู้ใช้
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
