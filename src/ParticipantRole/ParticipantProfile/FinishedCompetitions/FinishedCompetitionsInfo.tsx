
const FinishedCompetitionsInfo = () => {
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
        <div className="w-full px-4 md:px-0   container mx-auto py-8">
          <h2 className="text-2xl font-bold mb-8">Competitions info</h2>
          <div className="grid grid-cols-2 mb-14 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
          <div className="bg-gray-50  p-6 rounded-lg shadow-sm mb-6">
       <div className='max-w-[1000px]'>
       <h4 className="text-xl font-bold text-black mb-4">About Competition</h4>
        <p className="text-black mb-4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        <p className="text-black mb-4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        <p className="text-black mb-4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
       </div>
      </div>
        </div>
      );
    };
    

export default FinishedCompetitionsInfo;
