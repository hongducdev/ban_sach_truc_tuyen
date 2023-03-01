import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

const LayoutUser = () => {
  return (
    <div className="">
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default LayoutUser;
