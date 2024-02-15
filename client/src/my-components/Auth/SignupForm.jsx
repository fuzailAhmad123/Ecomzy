import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeSharp, } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


export const SignupForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const [showPassword ,setShowPassword] = useState(false);
  return (
    <div className="w-[80%] mx-auto ">
    <form onSubmit={handleSubmit(() => {})}>
      <div className="grid grid-cols-1 gap-x-5 gap-y-5">
        {/* email  */}
        <label className="lable-style">
          <p>
            Email Address <sup className="text-red-600 ">*</sup>
          </p>
          <input
            className="input-style"
            type="email"
            name="email"
            id="email"
            placeholder="hello@gmail.com"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="error-style">Please Enter Email</span>
          )}
        </label>
        {/* pass  */}
        <label className="lable-style">
          <p>
            Password <sup className="text-red-600 ">*</sup>
          </p>
          <input
            className="input-style"
            type={showPassword === true ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Enter Password"
            {...register("password", { required: true , minLength:6 })}
          />

          <span className="text-black font-emibold absolute top-[65%] right-4 cursor-pointer text-lg" onClick={() => setShowPassword((prev) => !prev)}>{
              showPassword === true ? <IoEyeSharp /> : <IoEyeOff />
              }</span>
          {errors.password && (
            <span className="error-style">Please Enter Password</span>
          )}
        </label>
        {/* confirmpass  */}
        <label className="lable-style">
          <p>
           Confirm Password <sup className="text-red-600 ">*</sup>
          </p>
          <input
            className="input-style"
            type={showPassword === true ? "text" : "password"}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            {...register("confirmPassword", { required: true , minLength:6 })}
          />

          <span className="text-black font-emibold absolute top-[65%] right-4 cursor-pointer text-lg" onClick={() => setShowPassword((prev) => !prev)}>{
              showPassword === true ? <IoEyeSharp /> : <IoEyeOff />
              }</span>
          {errors.confirmPassword && (
            <span className="error-style">Please Enter Password</span>
          )}
        </label>
      </div>
      <p className="text-black font-semibold text-center my-5">Already have an Account ?.  <span className="text-red-500">
              <Link to={"/login"}>Login</Link>               
          </span></p>
   
   <div className="flex flex-col  items-center">
   <button type="submit" className="mt-5 bg-black w-[70%] mx-auto text-white font-serif rounded-lg py-3 hover:bg-opacity-70 transition-all duration-300  ">Signup</button>
   <button  className="mt-5 border border-black rounded-lg flex items-center gap-x-3 w-[70%] mx-auto py-3 justify-center "><FcGoogle /> Signup with Google</button>
   </div>
    </form>
  </div>
  )
}
