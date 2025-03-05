import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 max-w-screen justify-between p-6 mt-0 lg:mt-20">
        <div className="flex flex-col gap-7 w-full lg:w-[50%]">
          <p className="text-[13px] font-medium uppercase leading-[18px] w-fit border-r-blue-100 rounded-2xl py-2 px-4 bg-gradient-to-r from-blue-200 to-white">
            Deliver your ideas faster
          </p>
          <h1 className="font-bold text-[46px] leading-[48px] pb-2 lg:text-[70px] lg:leading-[70px] bg-gradient-to-r from-blue-500 to-red-700 text-transparent bg-clip-text  ">
            Supercharge your productivity with AI image tools
          </h1>
          <p className="text-[18px] font-medium leading-[28px] text-gray-600">
            Say goodbye to tedious and time consuming photo editing tasks and
            embrace a high-productivity workflow with an AI assisted toolset.
          </p>

          <button className="bg-red-900 text-red-100 border border-red-400 border-b-4 font-medium overflow-hidden relative rounded-md hover:brightness-150 hover:border-t-4 hover:border-b py-3 px-6  w-fit  active:opacity-75 outline-none duration-300 group">
            <span className="bg-red-400  shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            TRY IT NOW
          </button>
        </div>

        <div className="w-full  lg:w-[50%] flex  lg:justify-end md:justify-center ">
          <img
            src="/banner.png"
            alt="Hero img"
          className="w-[360px] h-[360px]  lg:w-full lg:h-full xl:h-[90%] xl:w-[76%]"
         
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default Hero;
