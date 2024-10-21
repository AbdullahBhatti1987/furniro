import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { ImageModal } from "./ImageModal";

export default function CartProduct({
  src,
  title,
  price,
  onClick,
  removeItem,
  addItem,
}) {
  const [count, setCount] = useState(1);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="relative flex flex-row items-center text-center border rounded-lg py-1">
      <div className="w-2/12 flex flex-row justify-between items-center gap-1 py-1">
        <ImageModal src={src} />
      </div>
      <h3 className="w-3/12 truncate text-start">{title}</h3>
      <h4 className="w-2/12 text-start">{price}</h4>
      <div className="w-1/12 flex justify-center items-center">
        <div className="flex flex-row items-center border border-gray-300 rounded-full shadow-sm">
          <button
            onClick={() => {
              setCount(count - 1);
              {
                removeItem;
              }
            }}
            className="py-1 px-2 text-xs font-bold border-r bg-gray-50 rounded-tl-full rounded-bl-full active:bg-gray-100"
            disabled={count === 1}
          >
            -
          </button>
          <p className="py-1 px-2 text-xs">{count}</p>
          <button
            onClick={() => (setCount(count + 1), { addItem })}
            className="py-1 px-2 text-xs font-bold border-l bg-gray-50 rounded-tr-full rounded-br-full active:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>
      <h4 className="w-3/12 font-bold ">
        $ <span>{(price * count).toFixed(2)}</span>
      </h4>
      <button className="w-1/12 right-8 cursor-pointer">
        <AiFillDelete className="darkFont text-2xl" onClick={onClick} />
      </button>
    </div>
  );
}
