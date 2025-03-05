import { Contact } from "../../components/Contact"
import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Results from "../Results"
import img from '../../assets/result.png'





const GuestResultPage = () =>{

    return(
        <>
          <Navbar/>
          <Results/>
          <div className="container  rounded-lg bg-[#F7F7F7] p-6 my-32 mx-auto justify-between items-center lg:flex gap-20">
             <img src={img} className="rounded-2xl lg:mb-0 mb-8 md:h-[350px] md:w-[590px]" alt="img" />
             <div>
                <h3 className="text-2xl pb-3 font-bold">About results</h3>
                <p className="max-w-[800px]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
             </div>
          </div>
          <Contact/>
          <Footer/>
        </>
    )
}


export default GuestResultPage