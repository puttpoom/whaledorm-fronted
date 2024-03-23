import useAppointment from "../../../hooks/use-appointment";

export default function AppointmentBtn({ status, id }) {
  const { handleClickResponBtn } = useAppointment();
  const appointmentStatus = status;
  const standStandard =
    "w-full h-auto px-4 py-1 rounded-md font-semibold text-sm text-white flex justify-center flex-1 items-center";

  if (appointmentStatus === "PEDNING") {
    return (
      <button
        onClick={() =>
          handleClickResponBtn(id, { appointmentStatus: "CONFIRM" })
        }
        className={`bg-yellow-500 ${standStandard}`}
      >
        รอการตอบรับ
      </button>
    );
  } else if (appointmentStatus === "CONFIRM") {
    return (
      <button
        onClick={() =>
          handleClickResponBtn(id, { appointmentStatus: "CANCLED" })
        }
        className={`bg-green-500 ${standStandard}`}
      >
        ยืนยันแล้ว
      </button>
    );
  } else if (appointmentStatus === "CANCLED") {
    return (
      <button
        onClick={() =>
          handleClickResponBtn(id, { appointmentStatus: "CONFIRM" })
        }
        className={`bg-red-500 ${standStandard}`}
      >
        ถูกยกเลิกแล้ว
      </button>
    );
  }
  return <>{appointmentStatus}</>;
}
