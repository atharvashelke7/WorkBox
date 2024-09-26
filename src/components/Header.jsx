import React from "react";

const Header = () => {
  return (
    <div>
      <header className="bg-gradient-to-r from-[#01386b] to-blue-500 text-white md:py-12 p-6 rounded-bl-[50px] ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-100 tracking-wide md:pb-6">
            Create Project
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
