import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTrophy, FaUser, FaBars, FaAngleDoubleLeft, FaAngleDoubleRight, FaFileInvoiceDollar } from "react-icons/fa";
import logo from "../assets/logo.svg";

const AdminProfileMenu = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden  p-3 fixed top-4 left-4 bg-[#FF9D23] rounded-full z-50"
        onClick={() => setIsMobileOpen(true)}
      >
        <FaBars className="text-white text-2xl" />
      </button>

      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      <div
        className={`${
          isMobileOpen ? "w-64" : isExpanded ? "w-64" : "w-20"
        } h-screen bg-[#FF9D23] flex flex-col transition-all duration-300 fixed lg:relative z-10 ${
          isMobileOpen ? "left-0" : "-left-64 lg:left-0"
        }`}
      >
        <div className="flex  items-center justify-between p-4">
          <img className="h-12 mt-3" src={logo} alt="Logo" />
          <button
            className="hidden lg:block p-2 "
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? <FaAngleDoubleLeft className="text-2xl "/> : <FaAngleDoubleRight className="text-2xl "/>}
          </button>
        </div>

        <nav className="p-4">
          <NavLink
            to="/competitions"
            className={({ isActive }) =>
              `flex items-center my-3 p-2 px-3 rounded-lg gap-2  ${
                isActive ? "bg-[#FFFFFF] text-black" : ""
              }`
            }
          >
            <FaTrophy className="text-[#121212]" />
            {isExpanded && "Competitions"}
          </NavLink>
          <NavLink
            to="/juries"
            className={({ isActive }) =>
              `flex items-center my-3 p-2 px-3 rounded-lg gap-2  ${
                isActive ? "bg-[#FFFFFF] text-black" : ""
              }`
            }
          >
            <FaUser className="text-[#121212]" />
            {isExpanded && "Juries"}
          </NavLink>
          <NavLink
            to="/payments"
            className={({ isActive }) =>
              `flex items-center my-3 p-2 px-3 rounded-lg gap-2  ${
                isActive ? "bg-[#FFFFFF] text-black" : ""
              }`
            }
          >
            <FaFileInvoiceDollar  className="text-[#121212]" />
            {isExpanded && "Payments"}
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default AdminProfileMenu;