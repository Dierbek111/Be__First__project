import { NavLink } from "react-router-dom";
import { FaUser, FaShieldAlt, FaSignOutAlt, FaListAlt } from "react-icons/fa";

const RefereeProfileMenu = () => {
  return (
    <div className="w-72  bg-[#FFF8F8] h-full">
      <nav className="space-y-2 rounded-lg shadow bg-white p-4">
        <NavLink
          to="/referee-profile/personal-info"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-100 ${isActive ? "] bg-gray-100" : ""
            }`
          }
        >
          <FaUser className="text-orange-500" /> Personal info
        </NavLink>
        <NavLink
          to="/referee-profile/active-competitions"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-100 ${isActive ? "] bg-gray-100" : ""
            }`
          }
        >
          <FaListAlt className="text-orange-500" /> Active Competitions
        </NavLink>
        <NavLink
          to="/referee-profile/security"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-100 ${isActive ? "] bg-gray-100" : ""
            }`
          }
        >
          <FaShieldAlt className="text-orange-500" /> Security
        </NavLink>
        
      </nav>
      <button className="flex pl-5 items-center gap-2 rounded-lg shadow bg-white p-3 w-full mt-4 hover:bg-gray-100">
        <FaSignOutAlt className="text-red-600" /> Log out
      </button>
    </div>
  );
};

export default RefereeProfileMenu;
