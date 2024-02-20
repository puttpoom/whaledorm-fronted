import useRoom from "../../../hooks/use-room";

export default function DormFacilities() {
  const { dormRoom } = useRoom();
  console.log(dormRoom);
  return (
    <div className="flex flex-col">
      <div className="flex text-2xl font-semibold">
        สิ่งอำนวนความสะดวกส่วนกลาง
      </div>
      <div className="flex gap-24 p-2 flex-row">
        <div className="flex flex-col flex-grow gap-2">
          <div className="text-sm">item1</div>
          <div>item2</div>
          <div>item3</div>
          <div>item4</div>
          <div>item5</div>
        </div>
        <div className="flex flex-col flex-grow gap-2">Items-2</div>
      </div>
    </div>
  );
}
