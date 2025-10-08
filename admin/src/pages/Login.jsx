import React, { useState } from "react";
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/logo1.svg"; // Add your logo in src folder

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1616627789200-1c57a1d9c54b?auto=format&fit=crop&w=1740&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-3xl w-full max-w-md p-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {isLogin ? "Welcome Back!" : "Create Account"}
        </h2>

        {/* Social Login Buttons */}
        <div className="flex flex-col gap-4 mb-6">
          <button className="flex items-center justify-center gap-3 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300">
            <FaGoogle className="text-red-500 text-lg" /> Continue with Google
          </button>
          <button className="flex items-center justify-center gap-3 py-3 rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300">
            <FaFacebookF className="text-blue-600 text-lg" /> Continue with Facebook
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          {/* Password Field with Show/Hide */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password (Signup Only) */}
          {!isLogin && (
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-3.5 text-gray-500 cursor-pointer"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          )}

          {/* Remember Me & Forgot Password */}
          {isLogin && (
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
              <button className="text-blue-500 hover:underline">
                Forgot Password?
              </button>
            </div>
          )}

          {/* Login / Signup Button */}
          <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-3 rounded-xl hover:from-blue-600 hover:to-indigo-600 transition text-lg">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-center text-gray-500 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            className="text-blue-500 font-semibold hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
