import React from 'react';
import Navbar from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import { ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';

const ActiveCompetitions = () => {
  return (
   <>
   
   <Navbar/>
    <div className="p-5 container mx-auto pt-40">
    <Link to='/' className="text-xl text-gray-800 mb-4 flex items-center gap-2">
  <ArrowLeft className="w-5 h-5" />
  Back to Home page
</Link>

      <h2 className="text-3xl font-semibold  mb-10 mt-6">Competition Name</h2>

     <div className='flex gap-3 mb-12 justify-between'>
     <div className='bg-gray-50 shadow-sm rounded-lg p-4 w-full'>
         <h3 className="text-3xl font-medium text-black mb-2">980 </h3>
         Participants
      </div>
      <div className='bg-gray-50 shadow-sm rounded-lg p-4 w-full'>
        <h3 className='text-3xl font-medium text-black mb-2'> 12/10/2025</h3>
        End Date
      </div>
     </div>

      <div className="bg-gray-50  p-6 rounded-lg shadow-sm mb-6">
       <div className='max-w-[1000px]'>
       <h4 className="text-xl font-bold text-gray-700 mb-4">About Competition</h4>
        <p className="text-gray-600 mb-4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        <p className="text-gray-600 mb-4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        <p className="text-gray-600 mb-4">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
       </div>
      </div>

     
    </div>
    <Footer/>
    </>
  );
};

export default ActiveCompetitions;