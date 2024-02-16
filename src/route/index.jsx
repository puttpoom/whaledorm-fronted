import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../pages/Container";
import AuthPage from "../pages/AuthPage";
import RedirectIfAuthenticate from "../features/auth/component/RedirectIfAuthenticate";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "",
        element: <AuthPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={route} />; //! *****
}
