import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import logo from "../assets/logo1.svg"; // Put your logo in src folder

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <section>
         <div className="ml-2">
          <img src={logo} alt="Logo" className="h-16 max-w-[200px]" />
        </div>
   
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1616627789200-1c57a1d9c54b?auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl w-full max-w-md p-10">
        {/* Logo */}
       

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Welcome Back!
        </h2>

        {/* Social Login Buttons */}
        <div className="flex flex-col gap-4 mb-6">
          <button className="flex items-center justify-center gap-3 py-3 cursor-pointer rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300">
            <FaGoogle className="text-red-500 text-lg" /> Continue with Google
          </button>
          <button className="flex items-center justify-center gap-3 py-3 cursor-pointer rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300">
            <FaFacebookF className="text-blue-600 text-lg " /> Continue with Facebook
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Login Form */}
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="w-4 h-4 accent-blue-500"
              />
              Remember Me
            </label>
            <button className="text-blue-500 hover:underline cursor-pointer">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button className="bg-gradient-to-r cursor-pointer from-blue-500 to-indigo-500 text-white font-semibold py-3 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition text-lg">
            Login
          </button>
        </form>
      </div>
    </div>
     </section>
  );
};

export default Login;
