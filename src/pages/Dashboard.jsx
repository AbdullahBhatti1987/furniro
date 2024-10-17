import React from 'react'
import { Outlet } from 'react-router'
import { Component } from '../components/Navbar'
import Footer from '../components/Footer'



function Dashboard() {
  return (
    <>

      <Component/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Dashboard