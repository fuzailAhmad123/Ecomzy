import React from 'react'
 import BrandLogo from "../assets/logo/Ecomzy-logos_transparent.png";
 import DotsImage from "../assets/images/dots.webp"
import { LoginForm } from '@/my-components/Auth/LoginForm';
export const Login = () => {
  return (
    <div className='w-full min-h-screen bg-black flex items-start pt-4 justify-center '>
         <div className='w-[80%] h-[95%] flex items-center justify-between'>
             <div className='w-[50%]'>
                <img src={BrandLogo} alt="logo" />
             </div>
             <div className='w-[45%] bg-white rounded-lg h-[600px] relative flex items-center'>
             <p className='text-xl font-semibold font-mono text-white px-5 bg-black text-center capitalize absolute top-[50%] -left-[30%] rotate-90'>we are fast and trust worthy</p>
             {/* <img src={DotsImage} alt="dots" className='absolute top-0  right-0' /> */}
             <LoginForm/>
             </div>
         </div>    
    </div>
  )
}
