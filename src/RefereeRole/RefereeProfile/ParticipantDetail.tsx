import { useParams} from "react-router-dom";
import vector from '../../assets/Vector.svg'
import { Link } from "react-router-dom";
import image from '../../assets/image.png'
import {FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const ParticipantDetails = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [grade, setGrade] = useState<number | null>(null);
  
  const works = [
    { id: 1, work: image },
    { id: 2, work: image },
    { id: 3, work: image },
    { id: 4, work: image },
    { id: 5, work: image },
    { id: 6, work: image },
    { id: 7, work: image },
    { id: 8, work: image }
];

  return (
      <div className="w-full container">
      <div>

      <div className="flex w-full justify-between items-center">
      <div className="flex items-center gap-3 ">
            <FaUserCircle className="text-gray-400 text-3xl" />
            <span className="text-gray-800 font-medium">Nigora</span>
      </div>
      <button onClick={() => setIsOpen(true)} className="mt-4 bg-[#FF9D23] text-white sm:px-4 py-2 rounded-lg px-2 text-sm sm:text-lg">Grade</button>
      </div>
      
      <div className="flex grid grid-cols-4 items-center gap-4 mt-6">
      {works.map((work) => (
        <img className="w-[305px] h-[305px]" src={work.work} alt="Image" />
      ))}
      </div>

      {isOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[#313131] md:text-xl/[20px] sm:text-2xl/[30px]">
          Grade
        </h2>
        <button
          className="rounded-full bg-gray-200 hover:bg-gray-300 transition"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const comment = formData.get("comment");

        console.log({ grade, comment }); // Отправка данных
        setIsOpen(false);
      }} className="mt-4">
      
        <div className="flex justify-between gap-2">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <label key={num} className="cursor-pointer">
              <input
                type="radio"
                name="grade"
                value={num}
                checked={grade === num}
                onChange={() => setGrade(num)}
                className="hidden"
              />
              <span
                className={`w-12 h-12 flex items-center justify-center rounded-md text-lg cursor-pointer ${
                  grade === num
                    ? "bg-[#FC9B23] text-[#0B0C0E]"
                    : "bg-[#F9F9F9] text-[#0B0C0E] hover:bg-gray-300"
                }`}
              >
                {num}
              </span>
            </label>
          ))}
        </div>

        {/* Input для комментария */}
        <div className="mt-4">
          <textarea
            name="comment"
            className="w-full h-20 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Comment"
          />
        </div>

        <div className="mt-4 flex gap-[10px] justify-end">
          <button
            type="button"
            className="border rounded-2xl border-[#1212121A] py-2 px-6 text-base text-[#121212]"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-gradient-to-b from-[#FF9D23] to-[#D8851E] text-white rounded-2xl py-2 px-6 text-base"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  </div>
)}



    </div>
    </div>
  );
};

export default ParticipantDetails;