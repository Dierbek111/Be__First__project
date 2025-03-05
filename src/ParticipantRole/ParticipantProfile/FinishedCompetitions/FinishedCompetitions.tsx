import { Link } from "react-router-dom";
import FinishedCompetitionsInfo from "./FinishedCompetitionsInfo";
import Navbar from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { ArrowLeft, Download } from "lucide-react";

const FinishedCompetitions = () => {
  const competitionData = {
    name: "Competition Name",
    grade: 5,
    comment: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  };

  return (
    <>
    <Navbar/>
    <div className="container mt-36 mx-auto p-6">
    <Link to='/' className="text-xl text-gray-800 mb-4 flex items-center gap-2">
  <ArrowLeft className="w-5 h-5" />
  Back to Home page
</Link>
      <h1 className="text-2xl font-semibold mt-4">{competitionData.name}</h1>
      <div className="flex justify-end">
      <button className="mt-4  flex gap-2 text-lg justify-end font-medium items-center px-4 py-2  hover:text-gray-700">
       <Download size={22}/>  Download Certificate
      </button>
      </div>

      <div className="mt-6 bg-gray-100 p-4 rounded-lg">
        <div className="flex items-center">
          <span className="text-2xl pl-6 font-bold">Your grade:</span>
          <span className="ml-2 px-3 py-1 bg-orange-400 text-white text-lg font-bold rounded">
            {competitionData.grade}
          </span>
        </div>
        <p className="mt-2 pt-4 pl-8 max-w-[590px] pb-10 ">
          <strong>Jury's Comment:</strong> <br /> {competitionData.comment}
        </p>
      </div>

      

     
    </div>
      <FinishedCompetitionsInfo/>
    <Footer/>
    </>
  );
};

export default FinishedCompetitions;
