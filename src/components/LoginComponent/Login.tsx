import logo from '../../assets/logo.svg'
import loginimg from '../../assets/login.png'
import InputField from './PasswordInput'
import vector from '../../assets/Vector.svg'
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div className='px-4 flex justify-center items-center h-screen py-4 bg-transparent'>
            <div className='container  mx-auto flex text-center justify-center gap-[34px] lg:gap-[104px] md:gap-[44px] sm:gap-[104px] sm:text-left'>
                <div>
                    <Link to={'/'} className='flex  gap-2   justify-start  '>
                        <img className='w-9' src={vector} alt="Back slash" />
                    </Link>
                    <Link className='mt-[25px] cursor-pointer flex justify-center sm:block ' to={'/'}>
                    <img className='h-13' src={logo} alt="Logo" />
                    </Link>

                
                    <form className='md:mt-[50px] md:w-[300px] mt-[50px] w-[300px] lg:mt-[50px] lg:w-[412px] sm:mt-[125px] sm:w-[512px]'>
                        <h1 className='text-3xl/[28px] font-bold  text-[#313131] mb-4 md:text-4xl/[26px] sm:text-5xl/[48px] sm:mb-4 '>Login</h1>
                        <p className='mb-[25px] text-sm/[13.56px] text-[#313131] opacity-75 md:text-sm/[12px] md:mb-[25px] sm:text-base/[18.56px sm:mb-[50px]'>Login to access your travelwise  account</p>

                      <div className='mb-6 md:mb-4 '>
                      <div className='relative border border-[#79747E] rounded-2xl p-2'>
                        <label className='px-2  bg-[#FFF8F8] absolute text-sm px-2 -top-2.5  text-[#1C1B1F]' htmlFor="email">Email</label>
                        <input className='w-full outline-none py-1 px-2 bg-inherit text-base/[18px] text-[#1C1B1F md:text-sm/[12px]' type="email" id="email" name="email" required></input>
                        </div>
                      </div>

                        <div className='mb-4 md:mb-6'>
                        <InputField label="Password" type="password" name='password'/>
                        </div>

                        <div className="flex items-center mb-4 justify-between">
                            <label htmlFor='remember' className="flex items-center  text-xs/[12px] md:text-sm/[12px] sm:text-sm/[16px]">
                                 <input id='remember' name='remember' type="checkbox" className="mr-2 text-[#313131]" /> Remember me
                            </label>
                            <Link to="/forgot-password/" className=" text-xs/[12px] md:text-sm/[12px] sm:text-sm/[16px] text-[#FF8682]">Forgot Password</Link>
                        </div>
                        <button type='submit' className="w-full bg-gradient-to-b from-[#FF9D23] to-[#D8851E] text-white rounded-2xl py-3 text-lg mb-4">Login</button>
                        <div className='flex text-center items-center gap-[5px] justify-center'>
                            <p className=' text-xs/[12px] md:text-sm/[12px] sm:text-sm/[16px]'>Don't have an account?</p>
                            <Link to='/signup/' className='text-xs/[12px] md:text-sm/[12px] sm:text-sm/[16px] text-[#FF8682]'>Sign up</Link>
                        </div>
                    </form>
                </div>
                <img src={loginimg} className='object-contain w-[416px] h-[616px] md:w-[366px] md:h-[466px] lg:w-[416px] lg:h-[616px] mt-[70px] hidden sm:block' alt="Login" />
                
            </div>
        </div>
    )
}

export default Login 