import React from 'react'
import { Outlet } from 'react-router'
// import { Component } from '../components/Navbar'
import Footer from '../components/Footer'



function Auth() {
  return (
    <>

      {/* <Component/> */}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Auth