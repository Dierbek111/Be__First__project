import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProfileMenu from "./RefereeProfileMenu";
import { Routes, Route, Navigate, useLocation, Link } from "react-router-dom";
import Security from "./Security";
import PersonalInfo from "./PersonalInfo";
import ActiveCompetitions from "./ActiveCompetitions";
import CompetitionDetails from "./CompetitionDetail";
import ParticipantDetails from "./ParticipantDetail";
import { FaArrowLeft } from "react-icons/fa";

const RefereeProfile = () => {
    const location = useLocation();

    const showMenu = !location.pathname.includes("/active-competitions/" ) && !location.pathname.includes("/participant/")
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
      <div className="container flex gap-3 mx-auto w-full ">
      {showMenu && <ProfileMenu />}

        <div className="flex-1 md:mt-0 mt-7">
          <Routes>
            <Route path="security" element={<Security />} />
            <Route path="personal-info" element={<PersonalInfo/>}/>
            <Route path="active-competitions" element={<ActiveCompetitions/>}/>
            <Route path="active-competitions/:id" element={<CompetitionDetails />} />
            <Route path="participant/:id" element={<ParticipantDetails />} />
            {/* Default holatda Security sahifasiga yo‘naltirish */}
            <Route path="/" element={<Navigate to="security" />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RefereeProfile;
