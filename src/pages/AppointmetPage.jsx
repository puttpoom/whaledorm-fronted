import AppointmentContainer from "../features/appointment/components/AppointmentContainer";
import AppointmentContextProvider from "../features/appointment/contexts/AppointmentContext";

export default function AppointmetPage() {
  return (
    <div>
      <AppointmentContextProvider>
        <AppointmentContainer />
      </AppointmentContextProvider>
    </div>
  );
}
