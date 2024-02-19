import Input from "../../../components/Input";
import useDorm from "../../../hooks/use-dorm";

const initial = {};

export default function CreateRoomForm() {
  // const {} = useDorm();
  return (
    <div className="flex flex-col justify-center items-center">
      <div>Dorm Register</div>
      <form className="grid gap-4 min-w-[80vw]">
        <Input placeholder="เลขที่ห้อง" />
        <Input placeholder="ข้อมูล" />
        <Input type="file" />
        <Input placeholder="size" />
      </form>
    </div>
  );
}
