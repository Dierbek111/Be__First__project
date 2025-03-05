import { Facebook, Instagram, Twitter } from "lucide-react";
import img from "../assets/hero.svg";

const GuestExperts = () => {
  const experts = [
    {
      name: "Jocelin Schindler",
      role: "Software Engineer",
      photo: img,
    },
    {
      name: "Martin Dean",
      role: "Software Engineer",
      photo: img,
    },
    {
      name: "Jordan Santinus",
      role: "Software Engineer",
      photo: img,
    },
    {
      name: "Leo Strong",
      role: "Software Engineer",
      photo: img,
    },
    {
      name: "Marilyn Lewis",
      role: "Software Engineer",
      photo: img,
    },
    {
      name: "Lindsay Delkith",
      role: "Software Engineer",
      photo: img,
    },
    {
      name: "Hassan Doe",
      role: "Software Engineer",
      photo: img,
    },
    {
      name: "Ryan George",
      role: "Software Engineer",
      photo: img,
    },
    
  ];

  return (
    <div className="container mb-40 px-6 md:px-0 mx-auto">
      <h2 className="text-2xl font-bold mb-6 ">Experts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {experts.map((expert, index) => (
         <div key={index} className="bg-white h-[390px] md:h-[430px] shadow-lg rounded-3xl flex flex-col">
         <img
           src={expert.photo}
           alt={expert.name}
           className="w-full  h-[200px] md:h-[230px] rounded-t-3xl mb-3 mx-auto object-cover"
         />
         <div className="px-3">
           <h3 className="font-semibold text-lg">{expert.name}</h3>
           <p className="text-gray-600 text-sm">{expert.role}</p>
           <p className="text-gray-500 text-sm mt-2">
             There are many variations of passages of Lorem Ipsum available.
           </p>
         </div>
         {/* Social Media */}
         <div className="flex p-3 gap-3 mt-auto">
           <div className="w-8 h-8 cursor-pointer hover:bg-gray-200 flex items-center justify-center bg-gray-100 rounded-full">
             <Facebook className="w-4 h-4 text-gray-700" />
           </div>
           <div className="w-8 h-8 cursor-pointer hover:bg-gray-200 flex items-center justify-center bg-gray-100 rounded-full">
             <Instagram className="w-4 h-4 text-gray-700" />
           </div>
           <div className="w-8 h-8 cursor-pointer hover:bg-gray-200 flex items-center justify-center bg-gray-100 rounded-full">
             <Twitter className="w-4 h-4 text-gray-700" />
           </div>
         </div>
       </div>
       
        ))}
      </div>
    </div>
  );
};

export default GuestExperts;
