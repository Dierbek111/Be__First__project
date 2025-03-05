import Navbar from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import JoinCompetitionModal from './JoinCompetitionModal';
import SelectedChildren from './SelectedChildren';

const JoinCompetition = () => {


  return (
    <>
    <Navbar/>
      <div className="lg:max-w-5xl container mt-36 mx-auto p-6 bg-white rounded-lg">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-1">Join Competition</h1>
          <p className="text-gray-500 text-sm mb-6">Let's join Competition</p>
          
          <div className="md:flex gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm mb-1">Competition</label>
              <select className="w-full p-2.5 border rounded-lg bg-white text-gray-500">
                <option>Select</option>
              </select>
            </div>

            <div className="flex-1 md:pt-0 pt-3">
              <label className="block text-sm mb-1">Child</label>
              <select className="w-full p-2.5 border rounded-lg bg-white text-gray-500">
                <option>Select</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Physical Certificate</label>
            <div className="w-full flex items-center border rounded-lg p-2.5">
              <input 
                type="checkbox" 
                className="mr-2 h-4 w-4" 
              />
              <span className="text-gray-500">Not Selected</span>
            </div>
          </div>

          <div className='mt-5'>
          <SelectedChildren />
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <button className="px-6 py-2 border rounded-xl text-gray-600 hover:text-gray-800">
              Cancel
            </button>
           <JoinCompetitionModal/>
          </div>
        </div>
      </div>

     
      <Footer/>
    </>
  );
};

export default JoinCompetition;