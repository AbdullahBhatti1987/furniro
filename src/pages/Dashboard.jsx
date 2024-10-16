import React from 'react'
import { Header } from '../components/Header'
import { Outlet } from 'react-router'

function Dashboard() {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default Dashboard