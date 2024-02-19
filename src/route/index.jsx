import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../pages/Container";
import RedirectIfAuthenticate from "../features/auth/component/RedirectIfAuthenticate";
import HomePage from "../pages/HomePage";
import DormPage from "../pages/DormPage";
import ProtectedRouteDorm from "../features/dorm/components/ProtectedRouteDorm";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "",
        element: <HomePage />,
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
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={route} />;
}
