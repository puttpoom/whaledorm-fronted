import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./features/auth/contexts/AuthContext.jsx";
import DormContextProvider from "./features/dorm/contexts/DormContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
  // <React.StrictMode>
  // </React.StrictMode>,
);
