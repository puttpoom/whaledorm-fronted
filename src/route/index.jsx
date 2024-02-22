import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../pages/Container";
import RedirectIfAuthenticate from "../features/auth/component/RedirectIfAuthenticate";
import HomePage from "../pages/HomePage";
import DormPage from "../pages/DormPage";
import ProtectedRouteDorm from "../features/dorm/components/ProtectedRouteDorm";
import DormRoomPage from "../pages/DormRoomPage";
import AppointmetPage from "../pages/AppointmetPage";

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
        path: "dorm/:targetDormId",
        element: <DormRoomPage />,
      },
      {
        path: "appointment/:targetRoomId",
        element: <AppointmetPage />,
      },
    ],
  },
  // {
  //   path: "/",
  //   element: <Container />,
  //   children: [
  //     {
  //       path: "appointment/:targetRoomId",
  //       element: <AppointmetPage />,
  //     },
  //   ],
  // },
  // {
  //   path: "/dorm",
  //   element: (
  //     <ProtectedRouteDorm>
  //       <Container />
  //     </ProtectedRouteDorm>
  //   ),
  //   children: [
  //     {
  //       path: "",
  //       element: <DormPage />,
  //     },
  //   ],
  // },
]);

export default function Router() {
  return <RouterProvider router={route} />;
}
