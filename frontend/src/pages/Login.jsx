import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useToast from "../hooks/useToast"; 

const Login = () => {
  const setUser = useSetRecoilState(userAtom);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [showpass, setShowpass] = useState(false);
  const { showToast } = useToast(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();

      if (data.error) {
      
     
        showToast(data.error, "error");
        return
      } else {
        
        showToast("Login successful!", "success");
        
      }

      localStorage.setItem("user-threads", JSON.stringify(data));
      setUser(data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);

    
      showToast("Something went wrong. Please try again later.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-full justify-center flex-col items-center space-y-4 rounded-xl border-transparent bg-white px-2 py-1 md:w-8/12 md:border md:px-8 md:py-6 lg:w-5/12 lg:px-6 md:shadow-2xl xl:w-4/12 2xl:w-3/12">
        <a href="/">
          <img className="w-8" src="/figlogo.png" alt="Pincel logo" />
        </a>

        <div>
          <h6 className="font-heading text-base font-medium">
            <span className="font-medium">Login to your account</span>
          </h6>
        </div>

        <form className="w-full" onSubmit={handleLogin}>
          <div className="flex-col space-y-4">
            <div className="flex flex-col space-y-1">
              <label className="w-full text-sm font-medium text-gray-400 my-6">
                Email Address
                <div className="active-within:ring-2 relative flex h-10 w-full items-center rounded-md border border-gray-600 bg-white font-medium text-gray-800 shadow-sm transition-all lg:text-sm">
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    name="email"
                    className="h-10 flex-1 rounded-md bg-transparent text-gray-500 py-2 px-3 outline-none disabled:cursor-not-allowed disabled:opacity-30 sm:h-12 sm:px-4"
                    onChange={(e) =>
                      setInputs({ ...inputs, email: e.target.value })
                    }
                  />
                </div>
              </label>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="w-full text-sm font-medium text-gray-500">
              Password
            </label>
            <div className="relative flex flex-row">
              <input
                type={showpass ? "text" : "password"}
                name="password"
                required
                className="w-full pl-3 pr-10 py-2 text-gray-500 border border-gray-600 rounded-md sm:text-base"
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
              <span
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowpass(!showpass)}
              >
                {showpass ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              {loading ? (
                <div className="spinner-border animate-spin w-5 h-5 border-t-2 border-b-2 border-white rounded-full"></div>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>

        <div className="text-sm text-center">
          <span>Do not have an account yet?</span>
          <NavLink to="/signup" className="text-blue-600 hover:underline ml-2">
            Sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
