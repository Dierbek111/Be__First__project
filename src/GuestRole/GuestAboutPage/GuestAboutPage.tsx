import { Contact } from "../../components/Contact"
import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"
import GuestAbout from "../GuestAbout"
import GuestExperts from "../GuestExperts"





const GuestAboutPage = () =>{

    return(
        <>
          <Navbar/>
          <div className="mt-44">
           <GuestAbout/>
          </div>
          <GuestExperts/>
          <Contact/>
          <Footer/>
        </>
    )
}


export default GuestAboutPage