import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProfileMenu from "./ProfileMenu";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Security from "./Security";
import PersonalInfo from "./PersonalInfo";
import Children from "./Children";
import Competitions from "./Competitions";
import {FaArrowLeft} from "react-icons/fa"

const ParticipantProfile = () => {
  return (
    <>
      <Navbar />
      <Link
      to="/"
      className="flex mt-36 container mx-auto mb-10 items-center gap-2 text-black  hover:text-gray-700 transition duration-200"
    >
      <FaArrowLeft className="" />
      Back to Home Page
    </Link>
      <div className=" md:flex gap-5 container mx-auto w-full">
        <ProfileMenu />
        <div className="flex-1 md:mt-0 mt-7">
          <Routes>
            <Route path="security/" element={<Security />} />
            <Route path="personal-info/" element={<PersonalInfo/>} />
            <Route path="children/" element={<Children/>}/>
            <Route path="competitions/" element={<Competitions/>}/>
            <Route path="/" element={<Navigate to="personal-info/" />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ParticipantProfile;
