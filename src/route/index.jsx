import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "../pages/Container";
import HomePage from "../pages/HomePage";

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
]);

export default function Router() {
  return <RouterProvider router={route} />; //! *****
}
