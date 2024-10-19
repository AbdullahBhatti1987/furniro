import React from 'react'
import PageTop from "../components/PageTop";
import { Component } from '../components/Input';
import { PassComponent } from '../components/PasswordInput';
import { Link } from 'react-router-dom';
import { HiMail } from "react-icons/hi";

function Login() {
  return (
     <div className=''>
      <PageTop heading={"Login"} routeLink={"login"} to={"/auth/login"}/>
      <div className='lg:w-5/12 md:w-4/6 w-11/12 mx-auto flex flex-col justify-center items-center'>
          <div className='w-full border-b-2'>
            <h3 className='text-start text-2xl w-fit font-bold py-4 border-b-2 darkBorder min-w-[50%]'>Sign in</h3>
          </div>
            <p className='text-start w-full py-3 text-sm'>Insert your account information:</p>
          <div className='flex flex-col gap-4 w-full'>
            <Component id={"email4"} type={"email"} icon={HiMail} placeholder={"abdullah@gmail.com"}/>
            <PassComponent/>
            <p className='text-start w-full py-3 text-sm'>if you don't have account, please <Link to={"/auth/signup"}  className="text-blue-500 font-bold pl-2">Register Here</Link></p>
            <button className='darkColor py-4 lg:px-24 md:px-12 px-6 text-white font-bold rounded-lg  w-1/2'>Login</button>
          </div>
      </div>



     </div>
  )
}

export default Login