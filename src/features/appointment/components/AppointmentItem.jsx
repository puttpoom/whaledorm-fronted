export default function AppointmentItem({ appointment }) {
  console.log(appointment);
  const initialState = {
    id: 48,
    fullName: "Test",
    phone: "Test",
    title: "ห้องนี้ต้องการปล่อยเช่า",
    appointedDate: "",
    appointedTime: "",
    createdAt: "2024-03-22T00:02:13.172Z",
    appointmentStatus: "PEDNING",
    userId: 3,
    roomId: 2,
    dormId: 2,
  };
  return (
    <div className="grid grid-cols-[2fr_3fr_1fr_1fr_1fr_2fr] bg-white">
      <div className="py-2">{appointment.fullName || "fullName"}</div>
      <div className="py-2">{appointment.title || "title"}</div>
      <div className="py-2">{appointment.phone || "phone"}</div>
      <div className="py-2">{appointment.appointedDate || "appointedDate"}</div>
      <div className="py-2">{appointment.appointedTime || "appointedTime"}</div>
      <div className="py-2">
        {appointment.appointmentStatus || "appointmentStatus"}
      </div>
    </div>
  );
}
