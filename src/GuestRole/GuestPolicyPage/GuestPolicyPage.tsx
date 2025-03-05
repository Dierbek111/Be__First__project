import { Contact } from "../../components/Contact"
import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"





const GuestPolicyPage = () =>{

    return(
        <>
          <Navbar/>
            <section className="w-full md:px-0 px-3 mt-20 container mx-auto py-20">
             <div className="max-w-[1000px] flex flex-col gap-8">
             <h2 className="text-2xl font-bold">Competitions</h2>
             <p>
             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
             </p>
             <p>
             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
             </p>
             <p>
             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
             </p>
             </div>
            </section>
          <Contact/>
          <Footer/>
        </>
    )
}


export default GuestPolicyPage