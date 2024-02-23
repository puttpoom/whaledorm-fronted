import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../pages/Container";
import RedirectIfAuthenticate from "../features/auth/component/RedirectIfAuthenticate";
import HomePage from "../pages/HomePage";
import DormPage from "../pages/DormPage";
import ProtectedRouteDorm from "../features/dorm/components/ProtectedRouteDorm";
import DormRoomPage from "../pages/DormRoomPage";
import AppointmetPage from "../pages/AppointmetPage";
import AllAppointmentPage from "../pages/AllAppointmentPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "dorm/rooms/:targetDormId",
        element: <DormRoomPage />,
      },
      {
        path: "dorm/rooms/appointment/:targetRoomId",
        element: <AppointmetPage />,
      },
    ],
  },
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "dorm",
        element: <DormPage />,
      },
    ],
  },
  {
    path: "/dorm",
    element: (
      <ProtectedRouteDorm>
        <Container />
      </ProtectedRouteDorm>
    ),
    children: [
      {
        path: "",
        element: <DormPage />,
      },
      {
        path: "appointments",
        element: <AllAppointmentPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={route} />;
}
