export default function VacantRoomLable({ children, bgColor }) {
  const status = {
    green: "bg-green-600",
    red: "bg-red-800",
  };
  return (
    <>
      <div
        className={`inline-flex items-center text-[14px] text-white px-2.5 py-1 ${status[bgColor]} rounded-lg`}
      >
        {children}
      </div>
    </>
  );
}
