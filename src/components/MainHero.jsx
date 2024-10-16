import React from 'react'

function MainHero() {
  return (
    <div className="mainPic w-full relative flex items-center">
    <div className='blank w-[50%] h-full'></div>
    <div className='message w-[50%] my-24 p-8 gap-4 mx-12 lightColor h-full flex flex-col justify-evenly'>
        <p className='text-start font-bold'>New Arrival</p>
        <h1 className='text-6xl darkFont font-bold text-start'>Discover Our New Collection</h1>
        <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magni est ab maiores iste dolorum suscipit !</p>
        <button className='p-4 darkColor max-w-36 font-bold text-white'>BUY NOW</button>
    </div>

</div>
  )
}

export default MainHero