import logo from '../../assets/logo.svg'
import singupimg from '../../assets/signup.png'
import { Link } from "react-router-dom";
import InputField from '../LoginComponent/PasswordInput';
import BirthdayInput from "./BirthdayInput";
import vector from '../../assets/Vector.svg'

const Signup = () => {
    return(
        <div className='flex justify-center items-center h-screen px-4 py-4 bg-transparent'>
        <div className='container mx-auto items-center flex text-center justify-center gap-0 lg:gap-[124px] md:gap-[44px] sm:gap-[104px] sm:text-left gap-0'>
        <div>
        <Link to={'/'} className='flex  gap-2   justify-start  hidden md:block'>
                <img className='w-9' src={vector} alt="Back slash" />
        </Link>
        <img src={singupimg} className='w-[418px] h-[816px] lg:h-[606px] md:w-[366px] md:h-[466px] mt-[50px] hidden sm:block ' alt="Login" />
        </div>
            <div>

                    <Link to={'/'} className='flex  gap-2   justify-start  block md:hidden'>
                        <img className='w-9' src={vector} alt="Back slash" />
                    </Link>
                <Link className='cursor-pointer flex justify-center mt-4 sm:justify-end' to='/'>
                <img className='h-13' src={logo} alt="Logo" />
                </Link>
            
                <form className='mt-[50px] w-[300px] lg:mt-[100px] lg:w-[512px] md:mt-[50px] md:w-[300px] sm:mt-[125px] sm:w-[640px]'>
                    <h1 className='text-3xl/[28px] font-bold  text-[#313131] mb-4 md:text-4xl/[26px] sm:text-5xl/[48px] sm:mb-4'>Sign up</h1>
                    <p className='mb-[25px] text-sm/[13.56px] text-[#313131] opacity-75 md:text-sm/[12px] md:mb-[25px] sm:text-base/[18.56px] sm:mb-[50px]'>Let's get you all st up so you can access your personal account.</p>

                    <div className='gap-[20px] block sm:flex'>
                        <div className='mb-6 md:mb-4 sm:w-[calc((100%-20px)/2)]'>
                            <div className='relative border border-[#79747E] rounded-2xl p-2'>
                            <label className=' px-2 absolute text-sm  -top-2.5 ba text-[#1C1B1F] bg-[#FFF8F8]' htmlFor="first-name">First Name</label>
                            <input className='w-full outline-none py-1 px-2 bg-inherit text-base/[18px] text-[#1C1B1F] md:text-sm/[12px]' type="text" id="first-name" name="first-name" required></input>
                            </div>  
                        </div>

                        <div className='mb-6 md:mb-4 sm:w-[calc((100%-20px)/2)]'>
                            <div className='relative border border-[#79747E] rounded-2xl p-2'>
                            <label className=' px-2 absolute text-sm  -top-2.5 ba text-[#1C1B1F] bg-[#FFF8F8]' htmlFor="last-name">Last Name</label>
                            <input className='w-full outline-none py-1 px-2 bg-inherit text-base/[18px] text-[#1C1B1F] md:text-sm/[12px]' type="text" id="last-name" name="last-name" required></input>
                            </div>
                        </div>
                    </div>

                    <div className='block sm:flex gap-[20px]'>
                        <div className='mb-6 md:mb-4 sm:w-[calc((100%-20px)/2)]'>
                            <div className='relative border border-[#79747E] rounded-2xl p-2'>
                            <label className=' px-2 absolute text-sm  -top-2.5 ba text-[#1C1B1F] bg-[#FFF8F8]' htmlFor="fathers-name">Father's Name</label>
                            <input className='w-full outline-none py-1 px-2 bg-inherit text-base/[18px] text-[#1C1B1F] md:text-sm/[12px]' type="text" id="fathers-name" name="fathers-name" required></input>
                            </div>
                        </div>

                        <div className='mb-6 md:mb-4 sm:w-[calc((100%-20px)/2)]'>
                            <div className='relative border border-[#79747E] rounded-2xl p-2'>
                            <label className=' px-2 absolute text-sm  -top-2.5 ba text-[#1C1B1F] bg-[#FFF8F8]' htmlFor="birthday">Birthday</label>
                            <BirthdayInput locale='ru' />
                            </div>
                        </div>
                    </div>

                    <div className='block sm:flex gap-[20px]'>
                        <div className='mb-6 md:mb-4 w-full sm:w-[calc((100%-20px)/2)]'>
                            <div className='relative border border-[#79747E] rounded-2xl p-2'>
                            <label className=' px-2 absolute text-sm  -top-2.5 ba text-[#1C1B1F] bg-[#FFF8F8]' htmlFor="email">Email</label>
                            <input className='w-full outline-none py-1 px-2 bg-inherit text-base/[18px] text-[#1C1B1F] md:text-sm/[12px]' type="email" id="email" name="email" required></input>
                            </div>
                        </div>

                        <div className='mb-6 md:mb-4 sm:w-[calc((100%-20px)/2)]'>
                            <div className='relative border border-[#79747E] rounded-2xl p-2'>
                            <label className=' px-2 absolute text-sm -top-2.5 ba text-[#1C1B1F] bg-[#FFF8F8]' htmlFor="phone-number">Phone Number</label>
                            <input className='w-full outline-none py-1 px-2 bg-inherit text-base/[18px] text-[#1C1B1F] md:text-sm/[12px]' type="text" id="phone-number" name="phone-number" required></input>
                            </div>
                        </div>
                    </div>
                 
                    <div className='mb-4 md:mb-6'>
                    <InputField label="Password" type="password" name='password'/>
                    </div>

                    <div className='mb-4 md:mb-6'>
                    <InputField label="Confirm password" type="password" name='confirm-password'/>
                    </div>

                    <div className="flex text-center items-center gap-[4px] mb-4 md:gap-1">
                        <label htmlFor='agree' className="flex items-center ">
                             <input id='agree' name='agree' type="checkbox" className="mr-2 text-[#313131]" /> 
                             <p className='text-xs/[12px] sm:text-xs/[16px]'>I agree to all the</p>
                        </label>
                        <Link to="#" className="text-[#FF8682] text-xs/[12px] sm:text-xs/[16px]">Terms</Link>
                        <p className='text-xs/[12px] sm:text-xs/[16px]'>and</p>
                        <Link to="#" className=" text-[#FF8682] text-xs/[12px] sm:text-xs/[16px]">Privacy Policies</Link>
                    </div>
                    <button type='submit' className="w-full bg-gradient-to-b from-[#FF9D23] to-[#D8851E] text-white rounded-2xl py-3 text-lg mb-4">Sign up</button>
                    <div className='flex text-center items-center gap-[5px] justify-center'>
                        <p className='text-xs/[12px] md:text-sm/[12px] sm:text-sm/[16px]'>Already have an account?</p>
                        <Link to='/login/' className='text-xs/[12px] md:text-sm/[12px] sm:text-sm/[16px] text-[#FF8682]'> Login</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
)}

export default Signup