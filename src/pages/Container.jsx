import Header from "../layouts/Header";
import { Outlet } from "react-router-dom"; //! for others components

const Container = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Container;
