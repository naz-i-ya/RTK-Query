import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <div className="px-4 flex items-center w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
