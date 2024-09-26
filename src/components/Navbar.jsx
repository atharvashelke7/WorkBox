import React from "react";
import SideLinks from "./SideLinks";
import Logout from "./Logout";

const Navbar = () => {
  return (
    <div className="navbar lg:flex lg:h-screen lg:w-20 lg:bg-base-100 lg:shadow-lg lg:fixed lg:flex-col lg:justify-between lg:items-center fixed bottom-0 w-full bg-base-100 shadow-lg">
      <ul className="menu lg:menu-vertical menu-horizontal w-full flex justify-around lg:justify-center lg:flex-grow">
        <SideLinks />
      </ul>
      <div className="hidden lg:block lg:mb-4">
        <Logout />
      </div>
    </div>
  );
};

export default Navbar;


