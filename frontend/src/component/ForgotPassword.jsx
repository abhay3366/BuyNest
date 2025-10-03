import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 text-center">Forgot Password</h2>
       

        {/* Form */}
        <form className="mt-6 space-y-4">
         

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="••••••••"
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-indigo-700 cursor-pointer text-white py-2 rounded-lg font-medium"
          >
            Change Password
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default ForgotPassword;
