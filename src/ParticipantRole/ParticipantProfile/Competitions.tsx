import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Router navigatsiya

const Competitions = () => {
  const navigate = useNavigate(); // Router navigatsiya

  const tabs = [
    { id: "active", label: "Active" },
    { id: "finished", label: "Finished" },
    { id: "subscription", label: "Subscription" },
  ] as const;

  const [activeTab, setActiveTab] = useState<keyof typeof competitionsData>("active");

  const competitionsData: Record<
    string,
    { id: number; name: string; link: string }[]
  > = {
    active: [
      { id: 1, name: "Active Competition 1", link: "/participant-profile/competitions/active/1" },
      { id: 2, name: "Active Competition 2", link: "/participant-profile/competitions/active/2" },
      { id: 3, name: "Active Competition 3", link: "/participant-profile/competitions/active/3" },
    ],
    finished: [
      { id: 4, name: "Finished Competition 1", link: "/participant-profile/competitions/finished/4" },
      { id: 5, name: "Finished Competition 2", link: "/participant-profile/competitions/finished/5" },
    ],
    subscription: [
      { id: 6, name: "Subscription Competition 1", link: "#" },
      { id: 7, name: "Subscription Competition 2", link: "#" },
      { id: 8, name: "Subscription Competition 3", link: "#" },
      { id: 9, name: "Subscription Competition 4", link: "#" },
    ],
  };

  const competitions = competitionsData[activeTab] || [];

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-lg font-medium mb-6">My Competitions</h2>

      <div className="mb-6">
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as keyof typeof competitionsData)}
              className={`pb-2 px-4 ${
                activeTab === tab.id ? "border-b-2 border-black text-black" : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {competitions.length > 0 ? (
          competitions.map((comp) => (
            <div
              key={comp.id}
              onClick={() => navigate(comp.link)}
              className="flex items-center justify-between p-3 border-b cursor-pointer hover:bg-gray-100 transition"
            >
              <span>{comp.name}</span>
              <svg
                className="w-4 h-4 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No competitions available.</p>
        )}
      </div>
    </div>
  );
};

export default Competitions;
