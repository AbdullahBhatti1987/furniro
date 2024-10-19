import React, { useState } from 'react'
import { Component } from '../components/Breadcrumb'

function SingleProduct() {
    const [count, setCount] = useState(0);
   



  return (
    <div className=''>
        <div className="lightColor w-full">
            <div className='lg:w-10/12 w-11/12 mx-auto py-6'>
               <Component linkName={"Shop"} to={"/shop"}/>
            </div>
        </div>

        <div className='lg:w-10/12 w-11/12 mx-auto py-12 flex lg:flex-row md:flex-row flex-col justify-between items-start gap-4'>
            <div className="left w-6/12 flex flex-row gap-4">
                <div className="left w-2/12 min-h-36 flex flex-col justify-start items-center  gap-4">
                    <img className='rounded-2xl' src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                    <img className='rounded-2xl' src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                    <img className='rounded-2xl' src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                    <img className='rounded-2xl' src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                    
                </div>
                <div className="right w-10/12">
                    <img className='rounded-2xl' src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />  
                </div>
            </div>
            <div className="right w-6/12 ">
                <div className='flex flex-col justify-between gap-3'>
                    <h1 className='text-2xl text-start font-bold'>Asgaard sofa</h1>
                    <h3 className='text-lg text-start text-gray-400 font-semibold'>Rs, 250,000.00</h3>
                    <h3 className='text-lg text-start'>Rating | <span>4.7</span></h3>
                    <p className='text-sm text-justify'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eveniet, quo, dolorum veritatis unde aliquam placeat id exercitationem quibusdam tempore maxime inventore ab nam minus officia rem accusamus distinctio consequatur.
                    </p>
                    <div className='lg:w-3/12 md:w-6/12 w-12/12'>
                        <p className='text-gray-600 text-start'>Size</p>
                        <div className='flex flex-row gap-2'>
                            <button className='lightColor p-1 w-8 text-center rounded-md focus:border-gray-600 focus:border-2 focus:p-0'>L</button>
                            <button className='lightColor p-1 w-8 text-center rounded-md focus:border-gray-600 focus:border-2 focus:p-0'>XL</button>
                            <button className='lightColor p-1 w-8 text-center rounded-md focus:border-gray-600 focus:border-2 focus:p-0'>XS</button>

                        </div>
                    </div>
                    <div className='lg:w-3/12 md:w-6/12 w-12/12'>
                        <p className='text-gray-600 text-start'>Color</p>
                        <div className='flex flex-row gap-2'>
                            <button className='darkColor p-1 w-8 h-8 text-center rounded-full focus:border-green-800 active:border-4'></button>
                            <button className='bg-purple-800 p-1 w-8 h-8 text-center rounded-full  focus:border-green-800 focus:border-4'></button>
                            <button className='bg-black p-1 w-8 h-8 text-center rounded-full  focus:border-green-800 focus:border-4'></button>

                        </div>
                    </div>
                    <div className='flex flex-row gap-6'>
                        <div className='flex flex-row border-2 border-gray-400 w-fit rounded-xl shadow-lg active:shadow-2xl'>
                            <button onClick={() => setCount(count - 1)} className='active:bg-gray-400 py-2 px-4 min-w-4 rounded-tl-lg rounded-bl-lg text-lg font-bold'  disabled={count === 0}>-</button>
                            <p className=' py-2 px-4 min-w-4 text-lg'>{count}</p>
                            <button onClick={() => setCount(count + 1)} className='active:bg-gray-400 py-2 px-4 min-w-4  rounded-tr-lg rounded-br-lg text-lg  font-bold'>+</button>
                        </div>
                        <div className='flex flex-row border-2 border-gray-400 w-fit py-2 px-8 gap-4 rounded-xl shadow-lg'>
                            <button>Add to cart</button>

                        </div>
                        <div className='flex flex-row border-2 border-gray-400 w-fit py-2 px-8 gap-4 rounded-xl shadow-lg'>
                            <button>+ Compare</button>

                        </div>
                        
                    </div>
                </div>
            </div>




        </div>




    </div>
  )
}

export default SingleProduct