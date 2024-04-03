import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./features/auth/contexts/AuthContext.jsx";
import AppointmentContextProvider from "./features/appointment/contexts/AppointmentContext.jsx";
import RoomContextProvider from "./features/room/contexts/RoomContext.jsx";
import GoogleMapContextProvider from "./features/map/contexts/GoogleMapContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import DormContextProvider from "./features/dorm/contexts/DormContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="427204996136-m56284arl4oousd3f2pnhhs4iihdffgr.apps.googleusercontent.com">
    <AuthContextProvider>
      <AppointmentContextProvider>
        <GoogleMapContextProvider>
          <DormContextProvider>
            <RoomContextProvider>
              <App />
            </RoomContextProvider>
          </DormContextProvider>
        </GoogleMapContextProvider>
      </AppointmentContextProvider>
    </AuthContextProvider>
  </GoogleOAuthProvider>
  // <React.StrictMode>
  // </React.StrictMode>,
);
