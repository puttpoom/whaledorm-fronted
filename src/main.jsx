import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./features/auth/contexts/AuthContext.jsx";
import AppointmentContextProvider from "./features/appointment/contexts/AppointmentContext.jsx";
import RoomContextProvider from "./features/room/contexts/RoomContext.jsx";
import GoogleMapContextProvider from "./features/map/contexts/GoogleMapContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_LOGIN_CLIENT_ID}>
    <AuthContextProvider>
      <AppointmentContextProvider>
        <GoogleMapContextProvider>
          <RoomContextProvider>
            <App />
          </RoomContextProvider>
        </GoogleMapContextProvider>
      </AppointmentContextProvider>
    </AuthContextProvider>
  </GoogleOAuthProvider>
  // <React.StrictMode>
  // </React.StrictMode>,
);
