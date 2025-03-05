import { Contact } from "../../components/Contact"
import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"
import GuestExperts from "../GuestExperts"





const GuestWorksPage = () =>{

    return(
        <>
          <Navbar/>
          <div className="mt-40">
          <GuestExperts/>
          </div>
          <Contact/>
          <Footer/>
        </>
    )
}


export default GuestWorksPage