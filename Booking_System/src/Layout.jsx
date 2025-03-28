import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/index";

function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
