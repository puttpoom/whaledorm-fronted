import useAppointment from "../../../hooks/use-appointment";

export default function AppointmentBtn({ status, id }) {
  const { handleClickResponBtn } = useAppointment();
  const appointmentStatus = status;

  if (appointmentStatus === "PEDNING") {
    return (
      <>
        <button
          onClick={() =>
            handleClickResponBtn(id, { appointmentStatus: "CONFIRM" })
          }
          className="bg-slate-300 px-4 py-1"
        >
          รอการตอบรับ
        </button>
      </>
    );
  }
  return <>{appointmentStatus}</>;
}
