import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { ArrowRight } from "lucide-react";


const ActiveCompetitions = () => {
    const active_competitions = [
        { id: 1, name: 'Competition 1' },
        { id: 2, name: 'Competition 2' },
        { id: 3, name: 'Competition 3' }
    ];
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg sm:text-2xl font-normal mb-4">Active Competitions</h2>
        <div className="relative w-48">
        <select className="w-full p-2 mb-4 border rounded-lg appearance-none text-base bg-white focus:outline-none">
        <option>Filter by category</option>
        <option>Filter by id</option>
      </select>
      <FaChevronDown className="absolute right-[10%] top-[40%] transform -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
    {active_competitions.map((comp) => (
        <Link
        to={`/referee-profile/active-competitions/${comp.id}`}
        className="flex mb-3 items-center justify-between px-4 py-3 rounded-xl bg-[#1212120D] hover:bg-gray-200 transition"
      >
        <span className="text-gray-800 font-medium">{comp.name}</span>
        <ArrowRight className="text-gray-600 w-5 h-5" />
      </Link>
       
        ))}
      </div>
    );
  };
  
  export default ActiveCompetitions;
  