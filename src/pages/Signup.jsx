import React from 'react'
import PageTop from "../components/PageTop";
import { Component } from '../components/Input';
import { PassComponent } from '../components/PasswordInput';
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { HiMail } from "react-icons/hi";


function Signup() {
  return (
     <div>
      <PageTop heading={"Signup"} routeLink={"signup"} to={"/auth/signup"}/>
      <div className='lg:w-5/12 md:w-4/6 w-11/12 mx-auto flex flex-col justify-center items-center'>
          <div className='w-full border-b-2'>
            <h3 className='text-start text-2xl w-fit font-bold py-4 border-b-2 darkBorder min-w-[50%]'>Signup</h3>
          </div>
            <p className='text-start w-full py-3 text-sm'>Insert your account information:</p>
          <div className='flex flex-col gap-4 w-full'>
            <div className='flex flex-col md:flex-row lg:flex-row justify-between lg:gap-4 md:gap-3 gap-2'>
          <Component id={"firstname"} type={"text"} icon={FaRegUser} placeholder={"First name"}/>
          <Component id={"lastname"} type={"text"} icon={FaRegUser} placeholder={"Last name"}/>
          </div>
          <Component id={"age"} type={"text"} icon={FaRegUser} placeholder={"username"}/>
          <Component id={"email4"} type={"email"} icon={HiMail} placeholder={"abdullah@gmail.com"}/>
            <PassComponent/>
 
             <p className='text-start w-full py-3 text-sm'>if you have an account, please <Link to={"/auth/login"}  className="text-blue-500 font-bold pl-2">Login Here</Link></p>
            <button className='darkColor py-4 lg:px-24 md:px-12 px-6 text-white font-bold rounded-lg  w-1/2'>Signup</button>
          </div>
      </div>



     </div>
  )
}

export default Signup