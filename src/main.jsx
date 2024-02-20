import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./features/auth/contexts/AuthContext.jsx";
import DormContextProvider from "./features/dorm/contexts/DormContext.jsx";
import RoomContextProvider from "./features/room/contexts/RoomContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <DormContextProvider>
      <App />
    </DormContextProvider>
  </AuthContextProvider>
  // <React.StrictMode>
  // </React.StrictMode>,
);
