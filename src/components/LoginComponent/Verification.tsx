import logo from '../../assets/logo.svg'
import signup from '../../assets/signup.png'
import InputField from './PasswordInput'
import vector from '../../assets/Vector.svg'
import { Link } from "react-router-dom";

const Verification = () => {
    return(
        <div className='px-4 flex justify-center items-center h-screen py-4 bg-transparent'>
            <div className='container  mx-auto flex text-center justify-center gap-[34px] lg:gap-[104px] md:gap-[44px] sm:gap-[104px] sm:text-left'>
                <div>
                    <Link to={'/login/'} className='flex  gap-2   justify-start  '>
                        <img className='w-9' src={vector} alt="Back slash" />
                    </Link>

                    <Link className='mt-[25px] cursor-pointer flex justify-center sm:block ' to={'/'}>
                    <img className='h-13' src={logo} alt="Logo" />
                    </Link>
                
                    <form className='md:mt-[50px] md:w-[300px] mt-[50px] w-[300px] lg:mt-[50px] lg:w-[412px] sm:mt-[75px] sm:w-[512px]'>
                        <h1 className='text-lg/[20px] font-bold  text-[#313131] mb-4 md:text-4xl/[26px] sm:text-5xl/[48px] sm:mb-8 '>Verify code</h1>
                        <p className='mb-[25px] text-sm/[13.56px] text-[#313131] opacity-75 md:text-sm/[12px] md:mb-[25px] sm:text-base/[18.56px] sm:mb-[75px]'>An authentication code has been sent to your email.</p>

                        <div className='mb-4'>
                        <InputField label="Enter Code" type="password" name='enter-code'/>
                        </div>

                        <div className='flex justify-center items-center gap-[5px] mb-4 sm:mb-6 sm:justify-start'>
                            <p className=' text-xs/[12px] md:text-sm/[12px] sm:text-sm/[16px]'>Didn't receive a code?</p>
                            <Link to='/' className='text-xs/[12px] md:text-sm/[12px] sm:text-sm/[16px] text-[#FF8682]'>Resend</Link>
                        </div>

                      <Link to='/set-password/'>
                      <button type='submit' className="w-full bg-gradient-to-b from-[#FF9D23] to-[#D8851E] text-white rounded-2xl py-3 text-lg mb-4">Verify</button>
                      </Link>
                    </form>
                </div>
                <img src={signup} className='object-contain w-[416px] h-[616px] md:w-[366px] md:h-[466px] lg:w-[416px] lg:h-[616px] mt-[50px] hidden sm:block' alt="Login" />
                
            </div>
        </div>
    )
}

export default Verification 