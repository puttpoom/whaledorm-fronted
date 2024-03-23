import AppointmentBtn from "./AppointmentBtn";

export default function AppointmentItem({ appointment }) {
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
    <tr className="hover:bg-slate-300 hover:bg-opacity-40 duration-100">
      <td class="p-2">{appointment.fullName}</td>
      <td class="p-2">{appointment.phone}</td>
      <td class="p-2">{appointment.title}</td>
      <td class="p-2">{appointment.appointedDate}</td>
      <td class="p-2">{appointment.appointedTime}</td>
      <td class="">
        <AppointmentBtn
          // appointment={appointment}
          id={appointment.id}
          status={appointment.appointmentStatus}
        />
      </td>
    </tr>
  );
}
