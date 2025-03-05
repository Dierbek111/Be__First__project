import { Contact } from "../../components/Contact"
import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"
import GuestCompetitions from "../GuestCompetitions"



const GuestCompetitionsPage = () =>{

    return(
        <>
          <Navbar/>
          <GuestCompetitions/>
          <Contact/>
          <Footer/>
        </>
    )
}


export default GuestCompetitionsPage