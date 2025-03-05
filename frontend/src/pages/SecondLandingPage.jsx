import React from "react";
import { NavLink } from "react-router-dom";
import { FiMessageCircle } from "react-icons/fi";

const SecondLandingPage = () => {
  const navLink = ["Pricing", "Works", "Blog", "Contact", "Affilates"];
  return (
    <>
      <div className=" relative flex flex-col lg:flex-row items-center lg:gap-7 justify-center p-5 ">
        <img src="/Mobile.png" alt="Mobile pic" className="md:w-64 lg:w-93" />

        <div className="flex flex-col gap-9 md:gap-4 items-center justify-center text-center w-full md:w-[50%]">
          <h1 className="text-[38px] leading-[42px] lg:text-[60px] md:leading-[60px] font-bold">
            Ready When You Are
          </h1>
          <p className="text-center text-[18px] leading-[28px] text-[#4B5563] ">
            Jump right in start exploring,Whether you're here to
            create,manage,or discover ,our app is ready to go wherever you are
          </p>
        </div>
      </div>

      <div className="items-center justify-center flex  ">
        <div className="py-2 md:px-4 bg-[#9E4EF7] flex w-full lg:w-[70%] items-center flex-col md:flex-row justify-between rounded-full">
          <div className="flex md:flex-row gap-2 md:gap-6 ">
            <img src="/innerlogo.png" className="w-8 h-8" />

            <ul className=" gap-2 md:gap-4 xl:gap-6 flex md:flex cursor-pointer">
              {navLink.map((item, i) => (
                <NavLink
                  key={i}
                  to={
                    item.toLowerCase() === "landing"
                      ? "/"
                      : `/${item.toLowerCase()}`
                  }
                >
                  <li className="text-[15px]  md:text-[18px] leading-[28px] font-medium">
                    {item}
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>

          <div className="flex gap-3 mt-2 lg:gap-6">
            <button className="py-1  md:py-2 px-3 rounded-md text-amber-50 bg-black">
              Book 1:1 Demo
            </button>

            <button className="py-1 md:py-2 px-3 rounded-md bg-white text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="absolute hidden md:block  md:left-[88%] md:top-[80%] lg:left-[90%] xl:top-[90%] xl:left-[90%]">
  <FiMessageCircle 
    size={32}  
    className="bg-black py-2 rounded-full text-white size-[42px] md:size-[42px] lg:size-[52px]"
  />
</div>

    </>
  );
};

export default SecondLandingPage;
