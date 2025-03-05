import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useRole } from './RoleContext';
import Language from './Language';
import { useTranslation } from 'react-i18next';
import ProfileDropdown from './ProfileDropdown';
import { Bell} from "lucide-react";
import NotificationModal from './Notifications';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const {t} = useTranslation()
  const {role} = useRole()

  return (
    <nav className="px-4 md:px-0 bg-[#FFF8F8] fixed top-0 left-0 right-0 z-50 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-gray-800">
          <img className='h-13 md:15' src={logo} alt="Logo" />
        </Link>
        <div className="lg:flex space-x-6 hidden">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500" : "text-gray-600 hover:text-orange-500"}>{t("navbar.home")}</NavLink>
          <NavLink to="/guest-competitions/" className={({ isActive }) => isActive ? "text-orange-500" : "text-gray-600 hover:text-orange-500"}>Competitions</NavLink>
          <NavLink to="/guest-works/" className={({ isActive }) => isActive ? "text-orange-500" : "text-gray-600 hover:text-orange-500"}>Works</NavLink>
          <NavLink to="/guest-policy/" className={({ isActive }) => isActive ? "text-orange-500" : "text-gray-600 hover:text-orange-500"}>Policy</NavLink>
          <NavLink to="/guest-results/" className={({ isActive }) => isActive ? "text-orange-500" : "text-gray-600 hover:text-orange-500"}>Results</NavLink>
          <NavLink to="/guest-experts/" className={({ isActive }) => isActive ? "text-orange-500" : "text-gray-600 hover:text-orange-500"}>Experts</NavLink>
          <NavLink to="/guest-about/" className={({ isActive }) => isActive ? "text-orange-500" : "text-gray-600 hover:text-orange-500"}>About us</NavLink>
        </div>
        {role != "guest" && (
          <div className=' lg:flex hidden gap-3 items-center'>
          <Language/>
          <Bell  onClick={() => setShowModal(true)} className="w-5 h-5 cursor-pointer" />   
          {showModal && <NotificationModal onClose={() => setShowModal(false)} />} 
          <ProfileDropdown/>
          </div>
        )}
       {role == "guest" && (
         <div className="lg:flex items-center hidden">
         <NavLink to="/login/" className={({ isActive }) => isActive ? "text-orange-500" : "text-gray-600 hover:text-orange-500 mr-4"}>Sign in</NavLink>
         <NavLink to="/signup/" className="bg-orange-400 text-white px-4 py-2 rounded-2xl hover:bg-orange-500">Register</NavLink>
       </div>
       )}
       <div className='flex lg:hidden  items-center gap-3'>
       <Bell  onClick={() => setShowModal(true)} className="w-5 h-5 cursor-pointer" />   
       {showModal && <NotificationModal onClose={() => setShowModal(false)} />} 
       <button
          className="lg:hidden block p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'transform rotate-90' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
       
       </div>
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
          <div className={`fixed top-0 right-0 h-full w-3/4 max-w-[300px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(false)}>✕</button>
            <div className="px-6 py-6">
              {role != "guest" && (
                   <ProfileDropdown/>    
              )}
              <NavLink to="/" className={({ isActive }) => isActive ? "text-orange-500 block py-2" : "text-gray-600 hover:text-orange-500 block py-2"}>Home</NavLink>
              <NavLink to="/guest-competitions/" className={({ isActive }) => isActive ? "text-orange-500 block py-2" : "text-gray-600 hover:text-orange-500 block py-2"}>Competitions</NavLink>
              <NavLink to="/guest-works/" className={({ isActive }) => isActive ? "text-orange-500 block py-2" : "text-gray-600 hover:text-orange-500 block py-2"}>Works</NavLink>
              <NavLink to="/guest-policy/" className={({ isActive }) => isActive ? "text-orange-500 block py-2" : "text-gray-600 hover:text-orange-500 block py-2"}>Policy</NavLink>
              <NavLink to="/guest-results/" className={({ isActive }) => isActive ? "text-orange-500 block py-2" : "text-gray-600 hover:text-orange-500 block py-2"}>Results</NavLink>
              <NavLink to="/guest-experts/" className={({ isActive }) => isActive ? "text-orange-500 block py-2" : "text-gray-600 hover:text-orange-500 block py-2"}>Experts</NavLink>
              <NavLink to="/guest-about/" className={({ isActive }) => isActive ? "text-orange-500 block py-2" : "text-gray-600 hover:text-orange-500 block py-2"}>About us</NavLink>
              {role === "guest" && (
                <div className="mt-4">
                <NavLink to="/login/" className={({ isActive }) => isActive ? "text-orange-500" : "text-gray-600 hover:text-orange-500 mr-4"}>Sign in</NavLink>
                <NavLink to="/signup/" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">Register</NavLink>
              </div>
              )}
              <div className='pt-7'><Language/> </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
