import { Contact } from "../../components/Contact"
import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { Gallery } from "../GuestGallery"




const GuestWorksPage = () =>{

    return(
        <>
          <Navbar/>
          <Gallery/>
          <Contact/>
          <Footer/>
        </>
    )
}


export default GuestWorksPage