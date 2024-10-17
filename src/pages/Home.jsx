import React from 'react'
import MainHero from '../components/MainHero'
import BrowseTheRange from '../components/BrowseTheRange'
import OurProducts from '../components/OurProducts'
import {Component} from '../components/CarouselBox'
// import FurniroFurniture from '../components/FurniroFurniture'




function Home() {
  return (
    <div className='mainPic'>
        <MainHero/>
        <BrowseTheRange/>
        <OurProducts/>
        <Component/>
        {/* <FurniroFurniture/> */}
        
    </div>
  )
}

export default Home