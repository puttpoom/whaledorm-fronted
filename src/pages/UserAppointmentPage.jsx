import UserAppointmentContainer from "../features/appointment/components/UserAppointmentContainer";
import AppointmentContextProvider from "../features/appointment/contexts/AppointmentContext";
export default function UserAppointmentPage() {
  return (
    <>
      <AppointmentContextProvider>
        <UserAppointmentContainer />
      </AppointmentContextProvider>
    </>
  );
}
