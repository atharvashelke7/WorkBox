import React from "react";
import CreateProject from "../components/CreateProject";
import Logout from "../components/Logout";
import Logod from "../assets/Logod.png";

const AddProject = () => {
  return (
    <div className="md:align-middle md:px-2">
      <header className="bg-gradient-to-r from-[#01386b] to-blue-500 text-white md:py-12 p-6 rounded-bl-[50px]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-100 tracking-wider md:pb-6">
            Create Project
          </div>
          <div className="hidden md:block md:mr-[44vw] md:pb-5">
            <img width="70px" src={Logod} alt="logod" />
          </div>
          <div className="block lg:hidden">
            <Logout />
          </div>
        </div>
      </header>
      <CreateProject />
    </div>
  );
};

export default AddProject;
