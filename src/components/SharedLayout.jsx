import React from "react";
import { Outlet } from "react-router-dom";
import SideLinks from "./SideLinks";

const SharedLayout = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row h-screen">
      <aside className="w-full sm:w-16 lg:w-20 bg-base p-2 lg:pt-52 lg:p-4 shadow-xl lg:h-full">
        <SideLinks />
      </aside>
      <main className="flex-grow p-4 overflow-y-auto bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;





