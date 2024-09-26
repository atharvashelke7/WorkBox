import React, { useReducer, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { projectReducer, initialState } from "../utils/reducer";
import { api } from "../utils/apicall";
import axios from "axios";

const LOCAL_STORAGE_KEY = "projectFormState";

const CreateProject = () => {
  const [state, dispatch] = useReducer(projectReducer, initialState);
  const navigate = useNavigate();

  const [values , setValues] = useState({ theme: "",
    reason: "",
    type: "",
    division: "",
    category: "",
    priority: "",
    department: "",
    startDate: null,
    endDate: null,
    location: "",})

  useEffect(() => {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedState) {
      
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const handleChange = (e) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSave = async () => {
   
      try {
        const payload = {
          ...values,
          status: "Registered",
        };

       const responce = await api.post("/project", payload);
       const {status,data} = responce
       if(status === 201) {
        navigate("/homepage/listing");
        toast.success("Project saved successfully!");
        dispatch({ type: "SET_PROJECT_DETAILS", state:data });
       }
 
        localStorage.removeItem(LOCAL_STORAGE_KEY);
       

      } catch (error) {
        console.log("error while creating projet!",error)
      }
   
  };

  const isFormValid = () => {
    return Object.values(state).every(
      (value) => value !== "" && value !== null
    );
  };


  const handleOnChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log("values",values)

  return (
    <section className="flex justify-center items-center min-w-screen p-4 md:-mt-16">
      <ToastContainer />
      <div className="bg-base-100 shadow-lg p-8 w-full max-w-screen-xl rounded-md mt-4 md:max-w-screen-2xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-12">
          <div className="w-full md:w-3/6  ">
            <input
              type="text"
              name="theme"
              value={values.theme}
              onChange={(e) => handleOnChange("theme", e.target.value)}
              className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-500 rounded-md py-5 px-3 shadow-sm"
              placeholder="Enter Project Theme"
            />
          </div>
          <button
            onClick={handleSave}
            className="bg-blue-600 py-2 px-6 rounded-full text-white text-sm font-medium shadow-sm"
          >
            Save Project
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-y-8 md:gap-x-12 mt-4 md:mr-72">
          {/* Reason */}
          <div>
            <label htmlFor="reason" className="block text-sm font-medium leading-6 text-gray-700">
              Reason
            </label>
            <select
              name="reason"
              placeholder="Select Reason"
              value={values.reason}
              onChange={(e) => handleOnChange("reason", e.target.value)}
              className="select select-bordered w-full"
            >
               <option value="" disabled>
                Select a Reason
              </option>
              <option>Dealership</option>
              <option>Transport</option>
             
            </select>
           
             
          </div>

          {/* Type */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-700">
              Type
            </label>
            <select
              name="type"
              value={values.type}
              onChange={(e) => handleOnChange("type", e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="" disabled>
                Select a Type
              </option>
              <option>Internal</option>
              <option>External</option>
              <option>Vendor</option>
            </select>
          </div>

          {/* Division */}
          <div>
            <label htmlFor="division" className="block text-sm font-medium leading-6 text-gray-700">
              Division
            </label>
            <select
              name="division"
              value={values.division}
              onChange={(e) => handleOnChange("division", e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="" disabled>
                Select a Division
              </option>
              <option>Compressor</option>
              <option>Filters</option>
              <option>Pumps</option>
              <option>Glass</option>
              <option>Water Heater</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={values.category}
              onChange={(e) => handleOnChange("category", e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="" disabled>
                Select a Category
              </option>
              <option>Quality A</option>
              <option>Quality B</option>
              <option>Quality C</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <label htmlFor="priority" className="block text-sm font-medium leading-6 text-gray-700">
              Priority
            </label>
            <select
              name="priority"
              value={values.priority}
              onChange={(e) => handleOnChange("priority", e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="" disabled>
                Select a Priority
              </option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>

          {/* Department */}
          <div>
            <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-700">
              Department
            </label>
            <select
              name="department"
              value={values.department}
              onChange={(e) => handleOnChange("department", e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="" disabled>
                Select a Department
              </option>
              <option>Strategy</option>
              <option>Finance</option>
              <option>Quality</option>
              <option>Maintenance</option>
              <option>Stores</option>
            </select>
          </div>

          {/* Start Date */}
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium leading-6 text-gray-700">
              Start Date as per Project Plan
            </label>
            <div className="relative">
              <DatePicker
               name="startDate"
                selected={values.startDate}
                onChange={(date) => handleOnChange("startDate",date)}
                className="input input-bordered w-full pl-10 md:w-[21vw]"
                placeholderText="DD-MM-YYYY"
                dateFormat="dd/MM/yyyy"
                shouldCloseOnSelect={true}
                minDate={new Date()}
              />
              <IoCalendarOutline className="absolute left-3 md:right-3 top-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* End Date */}
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium leading-6 text-gray-700">
              End Date as per Project Plan
            </label>
            <div className="relative">
              <DatePicker
                 name="endDate"
                 selected={values.endDate}
                 onChange={(date) => handleOnChange("endDate",date)}
                className="input input-bordered w-full pl-10 md:w-[21vw]"
                placeholderText="DD-MM-YYYY"
                dateFormat="dd/MM/yyyy"
                shouldCloseOnSelect={true}
                minDate={state.startDate || new Date()}
              />
              <IoCalendarOutline className="absolute left-3 md:right-3 top-4 text-gray-500 pointer-events-none" />
            </div>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-700">
              Location
            </label>
            <select
              name="location"
              value={values.location}
              onChange={(e) => handleOnChange("location", e.target.value)}
              className="select select-bordered w-full"
            >
              <option value="" disabled>
                Select a Location
              </option>
              <option>Pune</option>
              <option>New Delhi</option>
              <option>Banglore</option>
            </select>
          </div>

          {/* Status */}
          <div className="col-span-full mt-4 text-center md:pl-[35vw] ">
            <h1 className="text-lg font-semibold">Status: Registered</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateProject;
