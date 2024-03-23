//icon & img
import { LogIn, LogOut } from "lucide-react";
import logoImg from "../assets/img/logo.png";

//component
import Button from "../components/Button";

//custom-hook
import useAuth from "../hooks/use-auth";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const { authUser, logout, setIsOpenLoginForm } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > (0 * window.innerHeight) / 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex bg-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.05)] justify-between items-center px-24 py-2 w-full z-50 h-16 ${
        isScrolled ? "sticky top-0" : ""
      }`}
    >
      <img src={logoImg} className="hidden md:block w-48 h-auto" />
      <div className="flex gap-8 items-center">
        <div className="flex gap-6 flex-shrink-0">
          <Link to="/">หน้าแรก</Link>
          {authUser && authUser.role === "DORM" ? (
            <Link to="/dorm/appointments">รายการนัดหมาย</Link>
          ) : null}
          {authUser && authUser.role === "USER" ? (
            <Link to={`/user/appointments/${authUser.id}`}>
              รายการนัดหมายของฉัน
            </Link>
          ) : null}
          <div>เกี่ยวกับเรา</div>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Button
            color="red"
            textColor="red"
            text="sm"
            outline="outline outline-red-600"
          >
            <Link className="flex-shrink-0 px-4" to="/dorm">
              ลงประกาศห้องพัก ฟรี!
            </Link>
          </Button>
          {authUser ? (
            <div className="flex text-blue-900 items-center gap-2">
              สวัสดีคุณ
              <span className="font-semibold">{authUser.firstName}</span>
              <Link to="/" role="button" onClick={(e) => logout()}>
                <LogOut size={20} />
              </Link>
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
