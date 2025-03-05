
import { Contact } from "../../components/Contact";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import GuestCompetitions from "../GuestCompetitions";
import { Gallery } from "../GuestGallery";
import Hero from "../GuestHero";
import Results from "../Results";


const GuestHomePage = () =>{


    return(
        <>

        <Navbar/>
        <Hero />
        <GuestCompetitions limit={6}/>
        <Gallery limit={6}/>
        <Results/>
        <Contact/>
        <Footer/>

    
        </>
    );
}

export default GuestHomePage