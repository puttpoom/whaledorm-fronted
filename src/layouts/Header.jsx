import { LogIn } from "lucide-react";
import logoImg from "../assets/img/logo.png";
import Button from "../components/Button";

const Header = () => {
  return (
    <header className="flex bg-white shadow-md justify-between px-24 py-2">
      <img src={logoImg} className="max-w-48" />
      <div className="flex gap-4 items-center min-w-4">
        <div>Home</div>
        <Button
          color="red"
          textColor="red"
          text="sm"
          outline="outline outline-red-600"
        >
          ลงประกาศห้องพัก ฟรี!
        </Button>
        <Button className="flex" color="blue" textColor="white" text="sm">
          เข้าสู่ระบบ <LogIn size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
