import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      localStorage.removeItem("userToken");

      toast.success("Logged out successfully!");

      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Error logging out!");
    }
  };
  return (
    <div>
      <button onClick={handleLogout} className="p-4">
        <IoIosLogOut className="h-10 w-6 text-slate-700" />
      </button>
    </div>
  );
};

export default Logout;
