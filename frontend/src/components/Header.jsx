import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";
import { NavLink, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import { useNavigate } from "react-router-dom";
import useToast from "../hooks/useToast"; 

const Header = () => {
  const navLink = ["Page2", "Dashboard", "Stock", "Pricing", "Blog", "Contact"];
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()
  const [user, setUser] = useRecoilState(userAtom);
  const { showToast } = useToast(); 

  const handleLogout = () => {
   
    setUser(null);

    
    localStorage.removeItem('user-threads');

    showToast('User Logged Out','success')
    navigate('/');
  };


  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }

  return (
    <div className="flex justify-between max-h-screen items-center p-4">
      <div className="flex justify-between items-center lg:w-[60%] xl:w-[40%]">
        <NavLink to='/'>
          <img src="./figlogo.png" alt="Figogo Logo" className="w-8" />
        </NavLink>

        <ul className="gap-6 hidden lg:flex cursor-pointer">
          {navLink.map((item, i) => (
            <NavLink key={i} to={item.toLowerCase() === 'landing' ? '/' : `/${item.toLowerCase()}`}>
              <li className="text-[18px]  leading-[28px] font-medium">
                {item}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>

      <div className="flex justify-between lg:hidden" onClick={() => setMenu(!menu)}>
        <RxHamburgerMenu size={33}  />
      </div>

      {!user && <div className="gap-8 hidden lg:flex">
        <NavLink to='/login'>
          <button
            type="submit"
            className="relative cursor-pointer  flex justify-center gap-2 py-2 px-4 items-center mx-auto outline-none backdrop-blur-md lg:font-semibold isolation-auto border-2 hover:text-gray-50 group hover:border-blue-900 rounded-lg overflow-hidden bg-transparent"
          >
            Login
            <svg
              className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-gray-800 group-hover:fill-gray-800"
              ></path>
            </svg>
            <span className="absolute inset-0 bg-blue-500 z-[-2] transform scale-x-0 origin-left group-hover:scale-x-100 transition-all duration-700 ease-in-out "></span>
          </button>
        </NavLink>

        <NavLink to='/signup'>
          <button className="relative cursor-pointer inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg bg-transparent text-black border-2 rounded-md group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute bottom-0 left-0 h-full -ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-auto h-full opacity-100 object-stretch"
                viewBox="0 0 487 487"
              >
                <path
                  fillOpacity=".1"
                  fillRule="nonzero"
                  fill="#FFF"
                  d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                ></path>
              </svg>
            </span>
            <span className="absolute top-0 right-0 w-12 h-full -mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="object-cover w-full h-full"
                viewBox="0 0 487 487"
              >
                <path
                  fillOpacity=".1"
                  fillRule="nonzero"
                  fill="#FFF"
                  d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                ></path>
              </svg>
            </span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
            <span className="relative text-base font-semibold">SignUp </span>
          </button>
        </NavLink>
      </div>} 


      {user && <button className="relative cursor-pointer hidden lg:inline-flex items-center justify-center px-8 py-3 overflow-hidden text-lg bg-gray-600 text-gray-200  border-2 rounded-md group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute bottom-0 left-0 h-full -ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-auto h-full opacity-100 object-stretch"
                viewBox="0 0 487 487"
              >
                <path
                  fillOpacity=".1"
                  fillRule="nonzero"
                  fill="#FFF"
                  d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                ></path>
              </svg>
            </span>
            <span className="absolute top-0 right-0 w-12 h-full -mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="object-cover w-full h-full"
                viewBox="0 0 487 487"
              >
                <path
                  fillOpacity=".1"
                  fillRule="nonzero"
                  fill="#FFF"
                  d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                ></path>
              </svg>
            </span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200"></span>
            <span className="relative text-base font-semibold " onClick={handleLogout}>Logout</span>
          </button>}

      <Sidebar menu={menu} setMenu={setMenu} />
    </div>
  );
};

export default Header;
