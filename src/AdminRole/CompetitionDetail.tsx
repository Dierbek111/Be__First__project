import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const tabs = ["Competition info", "Participants", "Winners"];

const generateMockData = (count: number, type: string) => 
  Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    fullName: `${type} Alisher Jabborov Rustam O'g'li ${index + 1}`,
    dob: "12/12/2024",
    age: 12,
    studyPlace: "5-Maktab",
    works: ["/image__1.png", "/image__2.png", "/image__3.png"],
    grade: 30,
  }));

const participantsData = generateMockData(50, "Participant");
const winnersData = generateMockData(50, "Winner");

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: { 
  currentPage: number; 
  totalPages: number; 
  onPageChange: (page: number) => void; 
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-end gap-2 my-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        ←
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
            currentPage === page 
              ? "bg-orange-500 text-white font-bold" 
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        →
      </button>
    </div>
  );
};

const AdminCompetitionDetails = () => {
  const { id } = useParams();
  const [selected, setSelected] = useState("Artwork");
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  
  const [participantsPage, setParticipantsPage] = useState(1);
  const [winnersPage, setWinnersPage] = useState(1);
  const itemsPerPage = 10;

  const options = ["Painting", "Sculpture", "Digital Art", "Photography"];

  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const { offsetWidth, offsetLeft } = tabRefs.current[activeTab]!;
      setIndicatorStyle({ width: offsetWidth, left: offsetLeft });
    }
  }, [activeTab]);

  return (
    <>
      <div className="container mx-auto flex text-center justify-center mt-[25px] gap-[34px] lg:gap-[104px] md:gap-[44px] sm:gap-[104px] sm:text-left sm:justify-start">
        CompetitionDetail
      </div>

      <div className="max-w-3xl p-4 mr-53  rounded-2xl">
        <h1 className="text-2xl font-bold">Competition Name</h1>

        <nav className="relative flex gap-6 my-4 border-b border-gray-300">
          {tabs.map((tab, index) => (
            <a
              key={index}
              ref={(el) => (tabRefs.current[index] = el)}
              className={`text-black pb-2 cursor-pointer transition-colors font-semibold`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </a>
          ))}
          <span
            className="absolute bottom-0 h-[2px] bg-black transition-all duration-300"
            style={{
              width: `${indicatorStyle.width}px`,
              left: `${indicatorStyle.left}px`,
            }}
          />
        </nav>

        <div className="mt-4">
          {activeTab === 0 && (
            <>
              <div className="flex flex-col items-center">
                <img
                  src="/public/image__info.png"
                  alt="Competition"
                  className=" w-[190px] mr-[545px]"
                />
              </div>

              <div className="flex gap-4 my-4">
                <p className="w-44 p-4 bg-gray-100 rounded-lg font-medium">
                  Art Competition
                </p>

                <div className="relative w-44">
                  <div
                    className="p-4 bg-gray-100 rounded-lg font-medium cursor-pointer flex justify-between items-center"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {selected}
                    <span className="ml-2">▼</span>
                  </div>

                  {isOpen && (
                    <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg overflow-hidden">
                      {options.map((option) => (
                        <div
                          key={option}
                          className="p-3 hover:bg-gray-200 cursor-pointer"
                          onClick={() => {
                            setSelected(option);
                            setIsOpen(false);
                          }}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-lg font-medium">Description</p>
                <p className="text-sm">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when <br />
                  looking at its layout. The point of using Lorem Ipsum is that
                  it has a more-or-less normal distribution of <br />
                  letters, as opposed to using 'Content here, content here',
                  making it look like readable English.
                </p>
              </div>

              <div className="my-4">
                <p className="text-lg font-medium">Start Registration</p>
                <div className="flex gap-4">
                  <input
                    type="datetime-local"
                    className="w-44 p-3 bg-gray-100 rounded-lg border-none"
                  />
                  <input
                    type="time"
                    className="w-44 p-3 bg-gray-100 rounded-lg border-none"
                  />
                </div>
              </div>

              <div className="my-4">
                <p className="text-lg font-medium">End Registration</p>
                <div className="flex gap-4">
                  <input
                    type="datetime-local"
                    className="w-44 p-3 bg-gray-100 rounded-lg border-none"
                  />
                  <input
                    type="time"
                    className="w-44 p-3 bg-gray-100 rounded-lg border-none"
                  />
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg my-4">
                <p className="text-lg font-medium">Rules</p>
                <p className="text-sm">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when <br />
                  looking at its layout. The point of using Lorem Ipsum is that
                  it has a more-or-less normal distribution of <br />
                  letters, as opposed to using 'Content here, content here',
                  making it look like readable English.
                </p>
              </div>

              <div className="my-4">
                <p className="text-lg font-medium">Grade criteria</p>
                <div className="bg-gray-100 p-4 rounded-lg flex flex-col gap-2">
                  <p>1. Drawing style</p>
                  <p>2. Creativity</p>
                </div>
              </div>
            </>
          )}

          {activeTab === 1 && (
            <div>
              <p className="text-lg font-medium">Participants</p>
              <div className="bg-gray-100 p-4 rounded-lg w-[1050px] relative">
                <div className="flex items-center border border-gray-300 rounded-md p-2 w-96">
                  <svg
                    className="mr-2 text-gray-600"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 14H14.71L14.43 13.73C15.63 12.33 16.25 10.42 16 8.5C15.5 5.5 13 3 10 3C6.69 3 4 5.69 4 9C4 12.31 6.69 15 10 15C11.92 15 13.75 14.36 15.17 13.17L15.5 14V15L20 19.49L21.49 18L17 13.5V14ZM10 13C7.79 13 6 11.21 6 9C6 6.79 7.79 5 10 5C12.21 5 14 6.79 14 9C14 11.21 12.21 13 10 13Z"
                      fill="currentColor"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border-none bg-gray-100 outline-none flex-1"
                  />
                </div>

                <table className="w-full border-collapse my-5 text-lg text-left rounded-lg shadow-md">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3">Full Name</th>
                      <th className="p-3">Date of Birthday</th>
                      <th className="p-3">Age</th>
                      <th className="p-3">Study Place</th>
                      <th className="p-3">Works</th>
                      <th className="p-3">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {participantsData
                      .slice(
                        (participantsPage - 1) * itemsPerPage,
                        participantsPage * itemsPerPage
                      )
                      .map((participant) => (
                        <tr
                          key={participant.id}
                          className="transition-colors hover:bg-gray-200"
                        >
                          <td className="p-3 font-medium">{participant.fullName}</td>
                          <td className="p-3 font-medium">{participant.dob}</td>
                          <td className="p-3 font-medium">{participant.age}</td>
                          <td className="p-3 font-medium">{participant.studyPlace}</td>
                          <td className="p-3 font-medium flex space-x-2">
                            {participant.works.map((work, i) => (
                              <img
                                key={i}
                                src={work}
                                alt={`Work ${i + 1}`}
                                className="w-12 h-12 rounded-md object-cover"
                              />
                            ))}
                          </td>
                          <td className="p-3 font-medium">{participant.grade}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <Pagination
                  currentPage={participantsPage}
                  totalPages={Math.ceil(participantsData.length / itemsPerPage)}
                  onPageChange={setParticipantsPage}
                />
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div>
              <p className="text-lg font-medium">Winners</p>
              <div className="bg-gray-100 p-4 rounded-lg w-[1050px] relative">
                <div className="flex items-center border border-gray-300 rounded-md p-2 w-96">
                  <svg
                    className="mr-2 text-gray-600"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5 14H14.71L14.43 13.73C15.63 12.33 16.25 10.42 16 8.5C15.5 5.5 13 3 10 3C6.69 3 4 5.69 4 9C4 12.31 6.69 15 10 15C11.92 15 13.75 14.36 15.17 13.17L15.5 14V15L20 19.49L21.49 18L17 13.5V14ZM10 13C7.79 13 6 11.21 6 9C6 6.79 7.79 5 10 5C12.21 5 14 6.79 14 9C14 11.21 12.21 13 10 13Z"
                      fill="currentColor"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="border-none outline-none bg-gray-100 flex-1"
                  />
                </div>

                <table className="w-full border-collapse my-5 text-lg text-left rounded-lg shadow-md">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-3">Full Name</th>
                      <th className="p-3">Date of Birthday</th>
                      <th className="p-3">Age</th>
                      <th className="p-3">Study Place</th>
                      <th className="p-3">Works</th>
                      <th className="p-3">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {winnersData
                      .slice(
                        (winnersPage - 1) * itemsPerPage,
                        winnersPage * itemsPerPage
                      )
                      .map((winner) => (
                        <tr
                          key={winner.id}
                          className="transition-colors hover:bg-gray-200"
                        >
                          <td className="p-3 font-medium">{winner.fullName}</td>
                          <td className="p-3 font-medium">{winner.dob}</td>
                          <td className="p-3 font-medium">{winner.age}</td>
                          <td className="p-3 font-medium">{winner.studyPlace}</td>
                          <td className="p-3 font-medium flex space-x-2">
                            {winner.works.map((work, i) => (
                              <img
                                key={i}
                                src={work}
                                alt={`Work ${i + 1}`}
                                className="w-12 h-12 rounded-md object-cover"
                              />
                            ))}
                          </td>
                          <td className="p-3 font-medium">{winner.grade}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <Pagination
                  currentPage={winnersPage}
                  totalPages={Math.ceil(winnersData.length / itemsPerPage)}
                  onPageChange={setWinnersPage}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminCompetitionDetails;