"use client";

import { Link } from 'react-router-dom';
import { Slider } from '../components/Carousel'

export function Component() {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap md:flex-row gap-4 p-12 justify-between items-center lightbg ">
      <div className="lg:w-[30%] w-[100%] m-6 flex flex-col items-start justify-around gap-6">
        <h1 className="text-4xl font-bold text-start">
          50+ Beautiful rooms inspiration
        </h1>
        <p className="text-md text-start">
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <Link to={"/shop"}><button className="py-3 px-6 darkColor text-white">Explore More</button></Link>
      </div>

      <div className="lg:w-[30%] md:w-[45%] w-[100%] flex flex-col items-start justify-around gap-6">
        <img
          src="https://s3-alpha-sig.figma.com/img/f89a/66d9/4961c3801f4c07439f27b13468e5e545?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DhqwrFKeI1YA~o6c6hIQW3MmftdtH5lDJ~3u3oAm~JVsIqJTEFnurmE7~t~WqLaxbsHho3jbG7bvvqBIEMSREfi3tRBuUgdCDdMTsAoCinVhZ4V~Rh38DnK2w2fUeHKKb6N1X4NCVy8YM0HZ-TCDstpfoKLgTwZCrQkHWQWD97Tb56jhewaeG0U3cOzPDo-emGgiyk1vayqHs7DOJ3D1x1QQ7x-Z4t0fsQ1~zmYXliBweMtbSjBZcb5sC7kFx6hb58lVlzKAJPjV-TBNf3Pg-BNp7Hyztk3XYaqxgIbqK6nn4FeJTQGUEueiIMaFRr1lAIwwNOEIC4CDNpjF0Ze4hA__"
          alt=""
        />
      </div>
        <div className="lg:w-[30%] md:w-[45%] w-[100%] h-full bg-gray-400 flex justify-start items-start">
        <Slider />
      </div>
    </div>
  );
}
