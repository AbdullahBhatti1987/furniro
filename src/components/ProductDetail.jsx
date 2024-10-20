import React, { useState } from "react";

function ProductDetail() {
  const [count, setCount] = useState(0);

  return (
    <div className="lg:w-10/12 w-11/12 mx-auto py-12 flex lg:flex-row md:flex-row flex-col justify-stretch items-start gap-8">
      {/* Left Div */}
      <div className="left lg:w-6/12 md:w-6/12 w-full flex flex-row gap-4 min-h-fit">
        <div className="left lg:w-2/12 w-3/12 flex flex-col justify-start items-center gap-4">
          <img
            className="rounded-2xl hover:shadow-lg transition-shadow duration-300"
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            className="rounded-2xl hover:shadow-lg transition-shadow duration-300"
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            className="rounded-2xl hover:shadow-lg transition-shadow duration-300"
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            className="rounded-2xl hover:shadow-lg transition-shadow duration-300"
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
        </div>
        <div className="right lg:w-10/12 w-full">
          <img
            className="rounded-2xl hover:shadow-lg transition-shadow duration-300"
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </div>
      </div>

      {/* Right Div */}
      <div className="right lg:w-6/12 md:w-6/12 w-full border-b-2 p-6">
        <div className="flex flex-col gap-4">
          <h1 className="lg:text-3xl text-2xl font-bold text-gray-800">
            Asgaard sofa
          </h1>
          <h3 className="lg:text-2xl text-xl text-gray-400 font-semibold">
            Rs, 250,000.00
          </h3>
          <div className="flex flex-row items-center">
            <h3 className="lg:text-lg text-md text-gray-600 font-medium">
              Rating:
            </h3>
            <span className="ml-2 text-yellow-500 text-lg font-bold">4.7</span>
          </div>
          <p className="text-sm lg:text-base leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            eveniet, quo, dolorum veritatis unde aliquam placeat id
            exercitationem quibusdam tempore maxime inventore ab nam minus
            officia rem accusamus distinctio consequatur.
          </p>
          <div className="lg:w-3/12 md:w-6/12 w-full">
            <p className="text-gray-600 font-semibold mb-1">Size</p>
            <div className="flex flex-row gap-3">
              <button className="bg-gray-200 p-2 w-10 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500">
                L
              </button>
              <button className="bg-gray-200 p-2 w-10 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500">
                XL
              </button>
              <button className="bg-gray-200 p-2 w-10 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500">
                XS
              </button>
            </div>
          </div>
          <div className="lg:w-3/12 md:w-6/12 w-full">
            <p className="text-gray-600 font-semibold mb-1">Color</p>
            <div className="flex flex-row gap-3">
              <button className="bg-green-800 w-8 h-8 rounded-full border-2 border-transparent focus:outline-none focus:border-green-800"></button>
              <button className="bg-purple-800 w-8 h-8 rounded-full border-2 border-transparent focus:outline-none focus:border-green-800"></button>
              <button className="bg-black w-8 h-8 rounded-full border-2 border-transparent focus:outline-none focus:border-green-800"></button>
            </div>
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <div className="flex flex-row items-center border-2 border-gray-300 rounded-xl shadow-sm">
              <button
                onClick={() => setCount(count - 1)}
                className="py-2 px-4 text-lg font-bold border-r bg-gray-50 rounded-tl-lg rounded-bl-lg active:bg-gray-100"
                disabled={count === 0}
              >
                -
              </button>
              <p className="py-2 px-4 text-lg">{count}</p>
              <button
                onClick={() => setCount(count + 1)}
                className="py-2 px-4 text-lg font-bold border-l bg-gray-50 rounded-tr-lg rounded-br-lg active:bg-gray-100"
              >
                +
              </button>
            </div>
            <button className="flex items-center justify-center text-nowrap px-4 lg:px-8 py-2 text-lg font-semibold border border-black rounded-xl shadow-lg hover:bg-gray-100 active:shadow-sm">
              Add to Cart
            </button>
            <button className="flex items-center justify-center text-nowrap px-4 lg:px-8 py-2 text-lg font-semibold border border-black rounded-xl shadow-lg hover:bg-gray-100 active:shadow-sm">
              + Compare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
