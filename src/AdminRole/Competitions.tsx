import { Link } from "react-router-dom";
import { useState } from "react";
import { FaSearch, FaFilter, FaPlus, FaEllipsisV, FaEdit, FaTrash, FaEye } from "react-icons/fa";
import AdminHeader from "./AdminComponent/AdminHeader";

const AdminCompetitions = () => {
    const competitions = [
    { id: '1',  name: "Artwork competition", category: "Art",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    registration: "11/12/2024 - 20/12/2024", status: "Active"
    },
    { id: '2',  name: "Artwork competition", category: "Art",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        registration: "11/12/2024 - 20/12/2024", status: "Finished"
    },
    { id: '3',  name: "Artwork competition", category: "Art",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        registration: "11/12/2024 - 20/12/2024", status: "Finished"
    },
    { id: '4',  name: "Artwork competition", category: "Art",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        registration: "11/12/2024 - 20/12/2024", status: "Active"
    },
    { id: '5',  name: "Artwork competition", category: "Art",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        registration: "11/12/2024 - 20/12/2024", status: "Active"
    },
    { id: '6',  name: "Artwork competition", category: "Art",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        registration: "11/12/2024 - 20/12/2024", status: "Finished"
    },
    { id: '7',  name: "Artwork competition", category: "Art",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        registration: "11/12/2024 - 20/12/2024", status: "Finished"
    },
    { id: '8',  name: "Artwork competition", category: "Art",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        registration: "11/12/2024 - 20/12/2024", status: "Active"
    },
    
    ]

    const itemsPerPage = 7;
    const [search, setSearch] = useState("");
    const [menuOpen, setMenuOpen] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(competitions.length / itemsPerPage);
    const displayedCompetitions = competitions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
    );

    const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
    };
    return (
     <div className="w-full container mx-auto">
     <AdminHeader/>
     <h1 className="text-2xl my-7 font-medium">Competitions</h1>

     <div className="flex items-center justify-between mb-4">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-[100px] py-2 rounded-md focus:outline-none bg-[#F7F7F7]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-md text-[gray-700] bg-[#F4F4F4]">
            <FaFilter /> Filter by Category
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#FF9D23] text-white rounded-md">
            <FaPlus /> Create Competition
          </button>
        </div>
      </div>

     <div className=" bg-white rounded-lg">   
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-[#1212120D] text-left">
               <th className="p-3 font-medium text-sm">Competition name</th>
               <th className="p-3 font-medium text-sm">Category</th>
               <th className="p-3 font-medium text-sm">Description</th>
               <th className="p-3 font-medium text-sm">Registration dates</th>
               <th className="p-3 font-medium text-sm">Status</th>
               <th className="p-3 font-medium text-sm">More</th>
            </tr>
          </thead>
          <tbody>
            {displayedCompetitions.map((comp, index) => (
              <tr key={index} className="border relative">
                <td className="p-3 text-sm">{comp.name}</td>
                <td className="p-3 text-sm">{comp.category}</td>
                <td className="p-3 text-sm max-w-xs">{comp.description}</td>
                <td className="p-3 text-sm">{comp.registration}</td>
                <td className="p-3 text-sm">{comp.status}</td>
                <td className="p-3 text-center relative">
                  <FaEllipsisV
                    className="cursor-pointer"
                    onClick={() => setMenuOpen(menuOpen === index ? null : index)}
                  />
                  {menuOpen === index && (
                    <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md z-10">
                      <Link to={`/competitions/${comp.id}`}>
                      <button className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100">
                        <FaEye /> See More
                      </button>
                      </Link>
                      <Link to={`/competition-edit/${comp.id}`}>
                      <button className="flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-gray-100">
                        <FaEdit /> Edit
                      </button>
                      </Link>
                      <Link to={`competition-delete/${comp.id}`}>
                      <button className="flex items-center gap-2 px-4 py-2 w-full text-left text-red-600 hover:bg-gray-100">
                        <FaTrash /> Delete
                      </button>
                      </Link>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      <div className="flex justify-end mt-4 space-x-2">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded-md ${currentPage === index + 1 ? "bg-[#FF9D23] text-white" : "border"}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>



     </div>
    );
  };
  
  export default AdminCompetitions;
  