import logo from '../../assets/logo.svg'
import singupimg from '../../assets/signup.png'
import { Link } from "react-router-dom";
import plus from '../../assets/plus.svg'
import { useState } from "react";
import BirthdayInput from "./BirthdayInput";

const Children = () => {
    const [isOpen, setIsOpen] = useState(false);
 
    return(
        <div className='px-4 flex justify-center items-center h-screen py-4 bg-transparent'>
            <div className='container  mx-auto flex text-center justify-center gap-0 lg:gap-[104px] md:gap-[44px] sm:gap-[104px] sm:text-left'>
        <div>
       
        <img src={singupimg} className='w-[418px] h-[816px] lg:h-[606px] md:w-[366px] md:h-[466px] mt-[50px] hidden sm:block ' alt="Login" />
        </div>
            <div>
                <Link className='cursor-pointer flex justify-center mt-4 sm:justify-end' to='/'>
                <img className='h-13' src={logo} alt="Logo" />
                </Link>

                <div className='mt-[20px] sm:mt-[100px]'>
                <h1 className='text-3xl/[28px] font-bold  text-[#313131] mb-4 md:text-4xl/[26px] sm:text-5xl/[48px] sm:mb-6'>Add Children</h1>
                <p className='mb-[25px] text-sm/[13.56px] text-[#313131] opacity-75 md:text-sm/[12px] md:mb-[25px] sm:text-base/[18.56px sm:mb-[50px]'>Let's add your children to participate to Competition.</p>
                <div onClick={() => setIsOpen(true)} className='border cursor-pointer border-[#79747E] rounded-2xl py-3 px-[50px] lg:py-2 lg:px-[100px] md:px-[75px] sm:md-[150px]'>
                    <div className='flex items-center justify-center gap-[10px] md:gap-[20px]'>
                        <h1 className='text-xs/[12px] md:text-sm/[12px] sm:text-sm/[16px]'>Add child</h1>
                        <img src={plus} alt="Plus" />
                    </div>
                </div>
                </div>

                {isOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-3xl/[28px] font-bold  text-[#313131] mb-4 md:text-4xl/[26px] sm:text-5xl/[48px] sm:mb-4">Add Children</h2>
            <p className="mb-[25px] text-sm/[13.56px] text-[#313131] opacity-75 md:text-sm/[12px] md:mb-[25px] sm:text-base/[18.56px] sm:mb-[50px]">Let's add your children to participate to Competition</p>


            <form className='mt-[50px] w-[300px] lg:w-[512px] md:mt-[50px] md:w-[300px] sm:mt-[100px] sm:w-[640px]'>
                  
                  <div className='gap-[20px] block sm:flex'>
                      <div className='mb-6 md:mb-4 sm:w-[calc((100%-20px)/2)]'>
                          <div className='relative border border-[#79747E] rounded-2xl p-2'>
                          <label className=' px-2 absolute text-sm px-2 -top-2.5 ba text-[#1C1B1F] bg-white' htmlFor="first-name">First Name</label>
                          <input className='w-full outline-none py-1 px-2 bg-inherit text-base/[18px] text-[#1C1B1F] md:text-sm/[12px]' type="text" id="first-name" name="first-name" required></input>
                          </div>
                      </div>

                      <div className='mb-6 md:mb-4 sm:w-[calc((100%-20px)/2)]'>
                          <div className='relative border border-[#79747E] rounded-2xl p-2'>
                          <label className=' px-2 absolute text-sm px-2 -top-2.5 ba text-[#1C1B1F] bg-white' htmlFor="last-name">Last Name</label>
                          <input className='w-full outline-none py-1 px-2 bg-inherit text-base/[18px] text-[#1C1B1F] md:text-sm/[12px]' type="text" id="last-name" name="last-name" required></input>
                          </div>
                      </div>
                  </div>

                  <div className='block sm:flex gap-[20px]'>
                      <div className='mb-6 md:mb-4 sm:w-[calc((100%-20px)/2)]'>
                          <div className='relative border border-[#79747E] rounded-2xl p-2'>
                          <label className=' px-2 absolute text-sm px-2 -top-2.5 ba text-[#1C1B1F] bg-white' htmlFor="fathers-name">Father's Name</label>
                          <input className='w-full outline-none py-1 px-2 bg-inherit text-base/[18px] text-[#1C1B1F] md:text-sm/[12px]' type="text" id="fathers-name" name="fathers-name" required></input>
                          </div>
                      </div>

                      <div className='mb-6 md:mb-4 sm:w-[calc((100%-20px)/2)]'>
                          <div className='relative border border-[#79747E] rounded-2xl p-2'>
                          <label className=' px-2 absolute text-sm px-2 -top-2.5 ba text-[#1C1B1F] bg-white' htmlFor="birthday">Birthday</label>
                          <BirthdayInput locale='ru' />
                          </div>
                      </div>
                  </div>

                  <div className='block sm:flex gap-[20px]'>
                      <div className='mb-6 md:mb-4 w-full sm:w-[calc((100%-20px)/2)]'>
                          <div className='relative border border-[#79747E] rounded-2xl p-2'>
                          <label className=' px-2 absolute text-sm px-2 -top-2.5 ba text-[#1C1B1F] bg-white' htmlFor="email">Study Place</label>
                          <input className='w-full outline-none py-1 px-2 bg-inherit text-base/[18px] text-[#1C1B1F] md:text-sm/[12px]' type="text" id="email" name="email" required></input>
                          </div>
                      </div>

                      <div className='mb-6 md:mb-4 sm:w-[calc((100%-20px)/2)]'>
                          <div className='relative border border-[#79747E] rounded-2xl p-2'>
                          <label className=' px-2 absolute text-sm px-2 -top-2.5 ba text-[#1C1B1F] bg-white' htmlFor="kinship">Type of kinship</label>
                          <select className='w-full outline-none py-1 px-2 bg-inherit text-base/[18px] text-[#1C1B1F] md:text-sm/[12px]' id="kinship" name="kinship" required>
                            <option value="son">Son</option>
                            <option value="daughter">Daughter</option></select>
                          </div>
                      </div>
                  </div>
              </form>





            {/* modal bottom */}
            <div className="mt-4 flex gap-[10px] justify-end">
              <button
                className="border rounded-2xl  border-[#1212121A] py-2 px-6 text-base text-[#121212]"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                type='submit'
                className="bg-gradient-to-b from-[#FF9D23] to-[#D8851E] text-white rounded-2xl py-2 px-6 text-base"
                onClick={() => setIsOpen(false)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        )}
            </div>
        </div>
        </div>
)}

export default Children