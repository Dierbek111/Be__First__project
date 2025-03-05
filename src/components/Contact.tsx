import img from '../assets/hero.svg'



const Contact = () => {
    const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
    };
  
    return (
      <div className="w-full  container mx-auto bg-gray-50 rounded-lg  mt-8">
        <div className="grid bg-gray-100 rounded-2xl p-6 md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src={img}
              alt="Contact"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <div className="flex flex-col mx-auto  justify-center ">
            <h2 className="text-2xl text-center mb-5 lg:text-5xl font-bold">Contact us</h2>
            
            <div className=" flex  mb-7 gap-8 ">
              <div>
                <h3 className="text-lg font-semibold text-orange-500">Visit us</h3>
                <p className="text-gray-600">2972 Westheimer Rd.</p>
                <p className="text-gray-600">Santa Ana, Illinois 85486</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-orange-500">Contact</h3>
                <p className="text-gray-600">contact@company.com</p>
                <p className="text-gray-600">(404) 555-0120</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="flex  gap-3">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button 
                type="submit"
                className="bg-orange-400 text-white px-6 py-2 rounded-2xl hover:bg-orange-500 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export { Contact };