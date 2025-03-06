import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useToast from "../hooks/useToast";
import { useGoogleLogin } from "@react-oauth/google";
import BASE_URL from "../utils/api";

const Signup = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const setUser = useSetRecoilState(userAtom);
  const [showpass, setShowpass] = useState(false);
  const { showToast } = useToast();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${BASE_URL}/api/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();

      if (data.error) {
        showToast(data.error, "error");
        return;
      } else {
        showToast("Signup successful!", "success");
      }

      localStorage.setItem("user-threads", JSON.stringify(data));
      setUser(data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      showToast("An error occurred. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await fetch(`${BASE_URL}/api/users/auth/google`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: response.access_token }),
        });

        const data = await res.json();

        if (data.error) {
          showToast(data.error, "error");
        } else {
          showToast("Signed up with Google!", "success");
          localStorage.setItem("user-threads", JSON.stringify(data));
          setUser(data);
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Google signup failed:", error);
        showToast("Google signup failed, please try again.", "error");
      }
    },
    onError: () => {
      showToast("Google signup failed, please try again.", "error");
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex w-full justify-center flex-col items-center space-y-4 rounded-xl border-transparent  px-2 py-1 md:w-8/12 md:border md:px-8 md:py-6 lg:w-5/12 lg:px-6 md:shadow-2xl xl:w-4/12 2xl:w-3/12">
        <a href="/">
          <img className="w-8" src="/figlogo.png" alt="Pincel logo" />
        </a>

        <div>
          <h6 className="font-heading text-base font-medium">
            <span className="font-medium">Sign up for an account</span>
          </h6>
        </div>

        
        <div className="w-full">
          <button
            type="button"
            onClick={() => googleLogin()}
            className="w-full bg-green-200 hover:bg-green-300 text-gray-700 border border-gray-300 rounded-md py-2 flex items-center justify-center space-x-2  transition-colors"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google Logo"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium">Sign up with Google</span>
          </button>
        </div>

        <div>
          <span className="text-xs text-gray-400">or continue with email</span>
        </div>

       
        <form className="w-full" onSubmit={handleSignup}>
          <div className="flex-col space-y-4">
            <div className="flex flex-col space-y-1 outline-neutral-500">
              <label className="w-full text-sm font-medium text-gray-400 my-6">
                Email Address
                <div className="active-within:ring-2 relative flex h-10 w-full items-center outline-none rounded-md border border-gray-600 bg-white font-medium text-gray-800 shadow-sm transition-all lg:text-sm">
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
                "Signup"
              )}
            </button>
          </div>
        </form>

        <div className="text-sm text-center">
          <span>Already have an account?</span>
          <NavLink to="/login" className="text-blue-600 hover:underline ml-2">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
