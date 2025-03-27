import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/index";

function Layout() {
  return (
    <div className="min-h-screen bg-white">
      {/* Centered Header */}
      <div className="max-w-[1920px] w-full mx-auto px-4 lg:px-8">
        <Header />
      </div>
      {/* Centered Main Outlet */}
      <div className="max-w-[1920px] w-full mx-auto px-4 lg:px-8 py-8">
        <Outlet />
      </div>
      {/* Centered Footer */}
      <div className="max-w-[1920px] w-full mx-auto px-4 lg:px-8">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
