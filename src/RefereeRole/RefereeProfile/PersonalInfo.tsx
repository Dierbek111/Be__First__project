import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import BirthdayInput from "../../components/SignupComponent/BirthdayInput";

const PersonalInfo = () => {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg sm:text-2xl font-normal mb-4">Personal info</h2>
        <div>
            <FaUserCircle className="sm:w-[64px] sm:h-[64px] text-[#1214354D] w-[48px] h-[48px] mb-2" />
            <Link className="text-[#FF9D23] text-xs sm:text-sm ml-2" to={''}>Browse</Link>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
      <input
        type="text"
        name="first-name"
        placeholder="First Name"
        className="w-full p-3 text-xs sm:text-sm rounded-lg bg-[#F9F9F9] placeholder-[#0B0C0E] text-[#0B0C0E] focus:outline-none placeholder:text-sm"
      />
      <input
        name="last-name"
        type="text"
        placeholder="Last Name"
        className="w-full p-3 text-xs sm:text-sm rounded-lg bg-[#F9F9F9] placeholder-[#0B0C0E] text-[#0B0C0E] focus:outline-none placeholder:text-sm"
      />
       </div>
      <div className="w-full p-3 rounded-lg bg-[#F9F9F9] mt-4">
        <BirthdayInput/>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-3 text-xs sm:text-sm rounded-lg bg-[#F9F9F9] placeholder-[#0B0C0E] text-[#0B0C0E] focus:outline-none placeholder:text-sm"
      />
      <input
        name="phone-number"
        type="text"
        maxLength={13}
        placeholder="Phone number"
        className="w-full p-3 text-xs sm:text-sm rounded-lg bg-[#F9F9F9] placeholder-[#0B0C0E] text-[#0B0C0E] focus:outline-none placeholder:text-sm"
      />
      </div>
        <button className="mt-4 bg-[#FF9D23] text-white sm:px-4 py-2 rounded-lg px-2 text-xs sm:text-sm">Save changes</button>
      </div>
    );
  };
  
  export default PersonalInfo;