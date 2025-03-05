import React, { useState } from "react";
import { FaPlus, FaStar } from "react-icons/fa";
import { Dashboarditem } from "../constant/constant";
import { NavLink } from "react-router-dom";
import ProductCard from "../components/ProductCard";


const DashBoard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      
      <div
        className={`lg:hidden fixed top-0 left-0 z-50 min-h-screen bg-gray-100 w-64 transition-transform duration-300 ease-in-out ${
          isSidebarOpen
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4">
          <NavLink to="/">
            <img src="/Dash_logo.webp" className="w-6 h-6 mt-3 " />
          </NavLink>
          <button onClick={toggleSidebar} className="text-2xl ">
            X
          </button>
        </div>
        <ul className="p-4">
          {Dashboarditem.map((item, i) => (
            <div className="flex flex-col items-center justify-center mt-12">
              <div
                index={i}
                className="flex gap-5  items-center border-b-1 border-gray-300 w-full"
              >
                <li>{item.icon}</li>
                <li className="text-center text-[19px]">{item.title}</li>
              </div>
            </div>
          ))}
        </ul>
      </div>

    
      <div className="flex flex-col lg:flex-row p-4">
        
        <div className="hidden lg:flex lg:flex-col items-center w-[9%] bg-gray-50  p-2">
          <NavLink to="/">
            <img src="/Dash_logo.webp" className="w-8 h-8  " />
          </NavLink>
          <ul className="p-4">
            {Dashboarditem.map((item, i) => (
              <div className="flex flex-col items-center justify-center mt-4">
                <div
                  index={i}
                  className="flex flex-col  items-center border-b-1 border-gray-300 w-full"
                >
                  <li>{item.icon}</li>
                  <li className="text-center">{item.title}</li>
                </div>
              </div>
            ))}
          </ul>
        </div>

        
        <div className="flex flex-col w-full lg:w-[90%] lg:ml-6">
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4 lg:gap-8">
              <NavLink to='/'>
              <img
                src="/Dash_logo.webp"
                className="w-6 h-6 lg:w-10 lg:h-10 lg:invisible"
              />
              </NavLink>
              <h1 className="font-bold text-[12px] lg:text-[22px]">
                Add New Product
              </h1>
            </div>

            
            <button
              onClick={toggleSidebar}
              className="lg:hidden py-1 px-2 lg:py-2 lg:px-4 text-[13px] bg-violet-500 text-white rounded-md"
            >
              ☰
            </button>

            
            <button className="py-1 px-2 lg:py-2 lg:px-4 text-[13px] bg-violet-500 text-white rounded-md hidden lg:block">
              Upgrade to Pro
            </button>
          </div>

          
          <div className="flex mt-4 mx-auto bg-gray-200 w-[95%] md:w-[70%] h-44 rounded-lg">
            <div className="mx-auto w-[90%] md:w-[96%] h-36 border-dashed border-2 border-gray-400 mt-4">
              <div className="flex flex-col mt-4 justify-center items-center gap-4">
                <button className="py-2 px-6 bg-violet-500 text-white rounded-md flex items-center gap-2 hover:bg-violet-600 transition-colors">
                  <FaPlus className="text-sm lg:text-lg" />
                  <span className="text-sm lg:text-lg font-medium">
                    Start Uploading
                  </span>
                </button>
                <p className="text-violet-700 text-center text-[11px] md:text-[15px] font-semibold">
                  Drop & drag anywhere to add product
                </p>
              </div>
            </div>
          </div>

          
          <div className="w-full mt-6">
            <div className="flex flex-col lg:flex-row  items-center gap-4">
              <h1 className="font-semibold text-[16px] md:text-[22px]">
                My Products
              </h1>
              <p className="font-semibold text-[13px] text-gray-600">
                Monthly Product limit 0/1
              </p>
            </div>

            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-items-center gap-4 mt-4 xl:w-[65%]">
              
              <ProductCard
                imgSrc="/n5.jpg"
                name="Blue Shirt Example"
                price="₹ 520"
                rating={3}
              />
              <ProductCard
                imgSrc="/n7.jpg"
                name="Brown Shirt Example"
                price="₹ 710"
                rating={4}
              />
              <ProductCard
                imgSrc="/f8.jpg"
                name="Girls Top Example"
                price="₹ 810"
                rating={3}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};




export default DashBoard;
