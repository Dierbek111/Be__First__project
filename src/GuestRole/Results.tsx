
const Results = () => {
  const stats = [
    {
      id: 1,
      icon: "👤",
      number: "980",
      label: "Participants"
    },
    {
      id: 2,
      icon: "🏆",
      number: "30",
      label: "Winners"
    },
    {
      id: 3,
      icon: "⭐",
      number: "990",
      label: "Awards"
    },
    {
      id: 4,
      icon: "📜",
      number: "2023",
      label: "Certificates"
    },
    {
      id: 5,
      icon: "💡",
      number: "5000",
      label: "Creative works"
    }
  ];

  return (
    <div className="w-full px-4 md:px-0 pt-40 container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-8">Results</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {stats.map((stat) => (
         <div key={stat.id} className="bg-gray-100  rounded-lg p-4 flex flex-col justify-center">
         <span className="text-8xl rounded-2xl w-full h-[200px] flex justify-center items-center bg-white mb-2">
           {stat.icon}
         </span>
         <span className="text-2xl font-bold mb-1 self-start">{stat.number}</span>
         <span className="text-sm text-gray-600 self-start">{stat.label}</span>
       </div>
       
        ))}
      </div>
    </div>
  );
};

export default Results