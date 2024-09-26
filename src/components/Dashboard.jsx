import React, { useEffect, useState } from "react";
import Chart from "./Chart";
import Logout from "./Logout";
import Logod from "../assets/Logod.png";

const Dashboard = () => {
  return (
    <div>
      <header className="bg-gradient-to-r from-[#01386b] to-blue-500 text-white md:py-12 p-6 rounded-bl-[50px] ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-100 tracking-wider md:pb-6">
            Dashboard
          </div>
          <div className="hidden md:block md:mr-[44vw] md:pb-5">
            <img width="70px" src={Logod} alt="logod" />
          </div>

          <div className="block lg:hidden">
            <Logout />
          </div>
        </div>
      </header>
      {/* CARDS */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:-mt-16">
          <div className=" bg-white shadow-md rounded-md overflow-hidden">
            <div className="bg-blue-400 h-2"></div>
            <div className="p-4">
              <h2 className="text-slate-700 tracking-wide text-sm md:text-lg">
                Total Project
              </h2>
              <p className="text-4xl font-bold text-slate-700 mt-2">8</p>
            </div>
          </div>
          <div className=" bg-white shadow-md rounded-md overflow-hidden">
            <div className="bg-blue-400 h-2"></div>
            <div className="p-4">
              <h2 className="text-slate-700 tracking-wide text-sm md:text-lg ">
                Closed
              </h2>
              <p className="text-4xl font-bold text-slate-700 mt-2">2</p>
            </div>
          </div>
          <div className=" bg-white shadow-md rounded-md overflow-hidden">
            <div className="bg-blue-400 h-2"></div>
            <div className="p-4">
              <h2 className="text-slate-700 tracking-wide text-sm md:text-lg ">
                Running
              </h2>
              <p className="text-4xl font-bold text-slate-700 mt-2">3</p>
            </div>
          </div>
          <div className=" bg-white shadow-md rounded-md overflow-hidden">
            <div className="bg-blue-400 h-2"></div>
            <div className="p-4">
              <h2 className="text-slate-700 tracking-wide ">Closure Delay</h2>
              <p className="text-4xl font-bold text-slate-700 mt-2">2</p>
            </div>
          </div>
          <div className=" bg-white shadow-md rounded-md overflow-hidden">
            <div className="bg-blue-400 h-2"></div>
            <div className="p-4">
              <h2 className="text-slate-700 tracking-wide ">Cancelled</h2>
              <p className="text-4xl font-bold text-slate-700 mt-2">3</p>
            </div>
          </div>
        </div>
      </div>
      {/* BAR GRAPH */}
      <div className="container mx-auto flex justify-start items-start p-4 ">
        <h2 className="text-xl font-medium text-slate-700">
          Department wise - Total Vs Closed
        </h2>
      </div>
      <div className="chart-container bg-base-100 shadow-xl rounded-md p-8 md:p-8 mt-3 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
