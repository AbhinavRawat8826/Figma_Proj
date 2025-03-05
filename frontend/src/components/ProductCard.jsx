import React from 'react'
import {  FaStar } from "react-icons/fa";

const ProductCard = ({ imgSrc, name, price, rating }) => {
    return (
      <div className="p-3 border border-gray-300 rounded-md flex  bg-white ">
        <div className="flex flex-col gap-2 bg-gray-100 ">
          <div className="border border-gray-300 rounded-md  overflow-hidden flex  justify-center items-center">
            <img src={imgSrc} className="w-full h-auto object-cover xl:w-60 " />
          </div>
          <p className="font-medium text-[15px]">{name}</p>
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={index < rating ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <h1 className="font-bold">{price}</h1>
        </div>
      </div>
    );
  };

export default ProductCard
