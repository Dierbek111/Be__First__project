import { NavLink } from "react-router-dom";
import { FaUser, FaChild, FaTrophy, FaShieldAlt, FaSignOutAlt } from "react-icons/fa";

const ProfileMenu = () => {
  return (
    <div className="w-72  bg-[#FFF8F8] h-full">
      <nav className="space-y-2 rounded-lg shadow bg-white p-4">
        <NavLink
          to="/participant-profile/personal-info/"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-100 ${isActive ? "] bg-gray-100 font-semibold" : ""
            }`
          }
        >
          <FaUser className="text-orange-500" /> Personal info
        </NavLink>

        <NavLink
          to="/participant-profile/children/"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-100 ${isActive ? "] bg-gray-100 font-semibold" : ""
            }`
          }
        >
          <FaChild className="text-orange-500" /> Children
        </NavLink>

        <NavLink
          to="/participant-profile/competitions/"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-100 ${isActive ? "] bg-gray-100 font-semibold" : ""
            }`
          }
        >
          <FaTrophy className="text-orange-500" /> My Competitions
        </NavLink>

        <NavLink
          to="/participant-profile/security/"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded hover:bg-gray-100 ${isActive ? "] bg-gray-100 font-semibold" : ""
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

export default ProfileMenu;
