import { Link } from 'react-router-dom';
import img from '../assets/hero.svg';
import { useRole } from '../components/RoleContext';

interface Competition {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  img: string;
}

interface GuestCompetitionsProps {
  limit?: number;
}

const GuestCompetitions: React.FC<GuestCompetitionsProps> = ({ limit }) => {
  const { role } = useRole();


  const competitions: Competition[] = [
    {
      id: 1,
      title: "Educational Portal Events",
      description: "Stay informed and engaged with educational portal events...",
      buttonText: "Join Competition",
      img: img,
    },
    {
      id: 2,
      title: "Educational Portal",
      description: "Stay informed and engaged with educational portal events...",
      buttonText: "Join Competition",
      img: img,
    },
    {
      id: 3,
      title: "Educational Portal",
      description: "Stay informed and engaged with educational portal events...",
      buttonText: "Join Competition",
      img: img,
    },
    {
      id: 4,
      title: "Educational Portal",
      description: "Stay informed and engaged with educational portal events...",
      buttonText: "Join Competition",
      img: img,
    },
    {
      id: 5,
      title: "Educational Portal",
      description: "Stay informed and engaged with educational portal events...",
      buttonText: "Join Competition",
      img: img,
    },
    {
      id: 6,
      title: "Educational Portal",
      description: "Stay informed and engaged with educational portal events...",
      buttonText: "Join Competition",
      img: img,
    },
    {
      id: 7,
      title: "Educational Portal",
      description: "Stay informed and engaged with educational portal events...",
      buttonText: "Join Competition",
      img: img,
    },
    {
      id: 8,
      title: "Educational Portal",
      description: "Stay informed and engaged with educational portal events...",
      buttonText: "Join Competition",
      img: img,
    },
    {
      id: 9,
      title: "Educational Portal",
      description: "Stay informed and engaged with educational portal events...",
      buttonText: "Join Competition",
      img: img,
    },
  ];


  const displayedCompetitions = limit ? competitions.slice(0, limit) : competitions;


  return (
    <div className="w-full md:px-0 px-3 mt-20 container mx-auto pt-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Competitions</h2>
        <button className="text-orange-400 hover:text-orange-500">Show all</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCompetitions.map((item) => (
          <div key={item.id} className="bg-gray-100 p-4 rounded-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <img src={item.img} alt="Educational event" className="w-full h-[280px] object-cover rounded-2xl" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-xl mb-3 text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{item.description}</p>
              <div className="flex gap-3">
                <button className="rounded-2xl border bg-white px-4 py-2">Subscribe</button>
                {role !== "referee" && (
                  <Link to={role === "guest" ? "/signup" : role === "participant" ? "/join-competition/" : "#"} className="bg-orange-400 text-white px-4 py-2 rounded-2xl hover:bg-orange-500 transition-colors">
                    Join Competition
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestCompetitions;
