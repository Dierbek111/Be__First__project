
import img from '../assets/about.svg';

const GuestAbout = () => {
  return (
    <div className="max-w-6xl rounded-xl mx-auto pt-16 mb-20 px-4 md:px-16 bg-white">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-wider mb-4">ABOUT US</p>
        <h1 className="text-4xl font-bold mb-4">
          Our vision is to make work<br />inspiring and fulfilling
        </h1>
        <p className="text-gray-600 italic">
          "Lead the way on a competitive platform designed for innovation and excellence."
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4 lg:max-w-[500px]">
          <p className="text-gray-600">
            HRLink was established in 2009 as a U.S.-based software development & consulting company with direct operations in Vietnam.
          </p>
          <p className="text-gray-600">
            Besides providing outsourcing services, HRLink has built and successfully launched its own software companies. The most notable companies with millions of users worldwide.
          </p>
          <p className="text-gray-600">
            HRLink is reliable, secure, and backed by a team of HR experts with a proven track record of developing high-quality technology solutions.
          </p>
          <p className="text-gray-600">
            With the growing size of many startups and SME companies and the increasing complexity of HR operations and employee management, we want to be present in HR space. Through process outsourcing, we're unique and difficult to integrate. HR management software provides a centralized platform for storing and automating HR processes to offer more free time for HR staff.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-1  left-[160px] rounded-lg shadow-sm relative h-[280px] w-[230px]">
            <div className="w-full h-full relative overflow-hidden rounded-lg">
              <img
                src={img}
                alt="Darrel Edward"
                className="w-full h-full object-cover object-center absolute inset-0"
              />
            </div>
            <div className="absolute left-[100px] bg-white ">
              <p className="font-semibold">Darrel Edward</p>
              <p className="text-sm text-gray-600">Co-Founder</p>
            </div>
          </div>

          <div className="bg-white bottom-60 right-[-20px] p-1 rounded-lg shadow-sm relative h-[280px] w-[230px]">
            <div className="w-full h-full relative overflow-hidden rounded-lg">
              <img
                src={img}
                alt="Ronald Richards"
                className="w-full h-full object-cover object-center absolute inset-0"
              />
            </div>
            <div className="absolute bg-white  ">
              <p className="font-semibold">Ronald Richards</p>
              <p className="text-sm text-gray-600">Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestAbout;