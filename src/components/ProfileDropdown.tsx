import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useRole } from './RoleContext';

const ProfileDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {role} = useRole()
  const dropdownRef = useRef<HTMLDivElement>(null);

  const user = {
    name: "Turg'unbek Qodirov",
    avatar:
      "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308460-stock-illustration-unknown-person-silhouette-profile-picture.jpg", // Profil rasmi
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 p-2 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={user.avatar} alt="Profile" className="w-8 h-8 rounded-full" />
        <span className="text-sm font-medium">{user.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md">
          {role == "referee" && (
                <Link to="/referee-profile/" className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">Profil</Link>
          )}
          {role == "participant" && (
                <Link to="/participant-profile/" className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">Profil</Link>
          )}
          <button className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100">
            Chiqish
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
