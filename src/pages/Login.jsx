import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Logod from "../assets/Logod.png";
import { api } from "../utils/apicall";
import axios from "axios";

const initialValues = {
  email: "",
  password: "",
};


const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();


 const onSubmit = async (values) => {
  console.log("🚀 ~ onSubmit ~ values:", values);
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, values, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const { status } = response;
    console.log("response", response);
   

    if (status === 200) {
      const jwtToken = response.data.jwtToken;
      console.log("token", jwtToken);
      localStorage.setItem("jwtToken", jwtToken);
      navigate("/homepage");
    }
  } catch (error) {
    console.error(error);
  }
};

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required*"),
      password: Yup.string()
        .min(6, "min 6 characters required")
        .max(12, "max 12 characters only")
        .required("required"),
    }),
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 p-4 relative">
      {/* BACKGROUND */}
      <div className="absolute inset-0 w-full h-96 bg-gradient-to-r from-blue-800 to-blue-500 z-0 rounded-bl-[80px]"></div>

      {/* LOGO */}
      <div className="relative z-10 mb-8">
        <img
          src={Logod}
          alt="Logo"
          className="h-16 md:h-20 lg:h-20 mx-auto rounded-lg"
        />
        <h1 className="mt-4 text-xm text-slate-100 tracking-wider">
          Online Project Management
        </h1>
      </div>

      {/* FORM */}
      <div className="md:relative z-10 bg-white py-12 px-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-xl font-normal mb-8 text-center text-slate-500">
          Login to get started
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center space-y-6"
        >
          <div className="w-full px-4">
            <label htmlFor="email" className="block text-slate-500 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              {...formik.getFieldProps("email")}
            />
            {formik.errors.email && (
              <p className="text-red-500 text-sm mt-2">{formik.errors.email}</p>
            )}
          </div>
          <div className="w-full px-4">
            <label htmlFor="password" className="block text-slate-500 mb-2">
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Password"
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
              {...formik.getFieldProps("password")}
            />
            {formik.errors.password && (
              <p className="text-red-500 text-sm mt-2">
                {formik.errors.password}
              </p>
            )}
            <div className="text-right mt-2">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="w-1/2 flex justify-center items-center py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
