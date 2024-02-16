import { useEffect, useRef } from "react";

//icon & img
import { LogIn, LogOut } from "lucide-react";
import logoImg from "../assets/img/logo.png";

//component
import Button from "../components/Button";

//custom-hook
import useAuth from "../hooks/use-auth";

export default function Header() {
  const { authUser, initialLoading, logout, setIsOpenLoginForm } = useAuth();

  return (
    <header className="flex bg-white shadow-md justify-between px-24 py-2">
      <img src={logoImg} className="hidden md:block" />
      <div className="flex gap-8 items-center min-w-4">
        <div className="flex gap-6">
          <div>หน้าแรก</div>
          <div>หอพัก</div>
          <div>เกี่ยวกับเรา</div>
        </div>
        <div className="flex gap-3">
          <Button
            color="red"
            textColor="red"
            text="sm"
            outline="outline outline-red-600"
          >
            ลงประกาศห้องพัก ฟรี!
          </Button>
          {authUser ? (
            <div className="flex text-blue-900 items-center gap-2">
              สวัสดีคุณ
              <span className="font-semibold">{authUser.firstName}</span>
              <span role="button" onClick={(e) => logout()}>
                <LogOut size={20} />
              </span>
            </div>
          ) : (
            <Button
              className="flex"
              color="blue"
              textColor="white"
              text="sm"
              onClick={(e) => setIsOpenLoginForm(true)}
            >
              เข้าสู่ระบบ <LogIn size={20} />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
