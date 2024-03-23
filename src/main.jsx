import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./features/auth/contexts/AuthContext.jsx";
import DormContextProvider from "./features/dorm/contexts/DormContext.jsx";
import AppointmentContextProvider from "./features/appointment/contexts/AppointmentContext.jsx";
import RoomContextProvider from "./features/room/contexts/RoomContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <AppointmentContextProvider>
      <RoomContextProvider>
        <App />
      </RoomContextProvider>
    </AppointmentContextProvider>
  </AuthContextProvider>
  // <React.StrictMode>
  // </React.StrictMode>,
);
