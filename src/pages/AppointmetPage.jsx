import AppointmentContainer from "../features/appointment/components/AppointmentContainer";
import AppointmentContextProvider from "../features/appointment/contexts/AppointmentContext";

export default function AppointmetPage() {
  return (
    <div className="flex flex-row">
      <AppointmentContextProvider>
        <AppointmentContainer />
      </AppointmentContextProvider>
    </div>
  );
}
