import React from "react";
import { NavLink } from "react-router-dom";
import { IoSpeedometerOutline } from "react-icons/io5";
import { RiAddLargeLine } from "react-icons/ri";
import { TfiViewList } from "react-icons/tfi";
import Logout from "./Logout";

const links = [
  {
    id: 1,
    url: "/homepage",
    text: <IoSpeedometerOutline className="w-7 h-6 " />,
  },
  {
    id: 2,
    url: "listing",
    text: <TfiViewList className="w-7 h-6 " />,
  },
  {
    id: 3,
    url: "addProject",
    text: <RiAddLargeLine className="w-7 h-6 " />,
  },
];

const SideLinks = () => {
  return (
    <div className="flex flex-row lg:flex-col justify-around lg:justify-start w-full">
      {links.map((link) => {
        const { id, url, text } = link;

        return (
          <NavLink
            key={id}
            to={url}
            className={({ isActive }) =>
              isActive
                ? "p-2 lg:p-4 text-blue-500"
                : "p-2 lg:p-4 text-gray-500 hover:text-blue-500"
            }
          >
            {text}
          </NavLink>
        );
      })}
      <div className="hidden lg:block pt-48 ">
        <Logout />
      </div>
    </div>
  );
};

export default SideLinks;


