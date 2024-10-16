import React from "react";

function Card({ src, alt, title, category, newPrice, oldPrice }) {
  return (
    <div className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
      <img className="" src={src} alt={alt} />
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-2xl">{title}</h3>
        <p>{category}</p>
        <div className="flex justify-between items-center">
          <h3>{newPrice}</h3>
          <p>{oldPrice}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
