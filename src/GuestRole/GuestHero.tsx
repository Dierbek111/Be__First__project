import img from '../assets/hero.svg'
// import cloud1 from '../assets/tl1.png'
// import cloud2 from '../assets/tl2.png'
// import cloud3 from '../assets/tl3.png'

const Hero = () => {
    return (
      <div className="bg-gray-100 h-screen mt-24 md:mt-16 lg:pt-44 py-16">
        <div
         className="container px-4 md:px-0 mx-auto flex flex-col  lg:flex-row items-center  justify-between ">
          <div className="w-full  pr-8 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-7xl max-w-[700px] font-bold text-gray-800 mb-9">
              Educational Portal Events
            </h1>
            <p className="text-gray-600 lg:leading-[32px] max-w-[500px] mb-9">
              Stay informed and engaged with educational portal events that offer valuable insights, learning opportunities, and networking with experts in the field.
            </p>
            
            <a href="#"
              className="bg-orange-400 text-white px-6 py-3 rounded-2xl hover:bg-orange-500"
            >
              Join Competition
            </a>
          </div>
          <div className="w-full h-full">
            <img
              src={img}
              alt="Educational Portal Events"
              className="rounded-md mt-10 lg:w-full lg:max-h-[412px] max-h-[300px] "
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Hero;
  