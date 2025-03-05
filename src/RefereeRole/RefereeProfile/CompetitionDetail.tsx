import { useParams} from "react-router-dom";
import vector from '../../assets/Vector.svg'
import { Link } from "react-router-dom";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";

const CompetitionDetails = () => {
  const { id } = useParams(); 
  const participants = [
    { id: 1, name: 'Alisher' },
    { id: 2, name: 'Jahongir' },
    { id: 3, name: 'Nigora' },
    { id: 4, name: 'Jahongir' }
];

  return (
      <div className="container mx-auto flex text-center justify-center mt-[25px] gap-[34px] lg:gap-[104px] md:gap-[44px] sm:gap-[104px] sm:text-left sm:justify-start">
      <div>
      <h1 className="text-lg sm:text-3xl font-semibold mb-10 mt-6">Competition Name</h1>
      <div className="flex gap-4 mb-4">
      <div className="bg-[#F5F5F5] pr-[400px] rounded-xl px-8 py-4">
        <p className="text-2xl font-bold mb-4">980</p>
        <p className="text-[#121212B2] text-sm">Participants</p>
      </div>
      <div className="bg-[#F5F5F5] pr-[400px] rounded-xl px-8 py-4">
        <p className="text-2xl font-bold mb-4">12/10/2025</p>
        <p className="text-[#121212B2] text-sm">End Date</p>
      </div>
    </div>
    <div className="bg-[#F7F7F799] p-[32px] rounded-xl">
    <h1 className="text-lg sm:text-2xl font-normal mb-4">Particpants</h1>
     <div className="relative w-48">
        <select className="w-full p-2 mb-4 border rounded-lg appearance-none text-base bg-white focus:outline-none">
          <option>Filter by category</option>
          <option>Filter by id</option>
        </select>
        <FaChevronDown className="absolute right-[10%] top-[40%] transform -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>


    <div className="flex gap-4 flex-wrap">
    {participants.map((participant) => (
      <Link
        to={`/referee-profile/participant/${participant.id}`}
        className="w-[40%] flex mb-3 items-center justify-between"
      >
      <div className="flex items-center gap-3 p-3 border border-[#1212121A] rounded-xl shadow-sm bg-white w-full">
      <FaUserCircle className="text-gray-400 text-3xl" />
      <span className="text-gray-800 font-medium">{participant.name}</span>
      </div>
      </Link>
       
    ))}
    </div>

    </div>
      </div>
      </div>
  );
};

export default CompetitionDetails;