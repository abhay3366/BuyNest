import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 text-center">Create Account</h2>
        <p className="mt-2 text-sm text-gray-600 text-center">
          Sign up to get started with CLASSYSHOP
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="abhaykanttiwari9595@gmail.com"
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
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

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" id="terms" className="rounded border-gray-300" />
            <label htmlFor="terms">
              I agree to the{" "}
              <Link to="/terms" className="text-indigo-600 hover:underline">
                Terms & Conditions
              </Link>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary hover:bg-indigo-700 cursor-pointer text-white py-2 rounded-lg font-medium"
          >
            Sign Up
          </button>
        </form>

        {/* Already have account */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-medium hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
