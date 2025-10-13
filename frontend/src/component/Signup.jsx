import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import {  toast } from 'react-toastify'
import Verify from "./Verify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isConfirm: false
  })
  const [loading, setLoading] = useState(false)
   const navigate = useNavigate();
  const handleInput = (e) => {
    e.preventDefault();
    const { name, value, type, checked } = e.target;
    console.log(checked)

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));


  }
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
       setLoading(true)
      const response = await fetch('http://localhost:8000/users/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      // set token in local storage
      const localStorageData={
        "token":data.token,
        user:{
          name:data.name,
          email:data.email
        }
      }
    localStorage.setItem("userData",JSON.stringify(localStorageData));

      console.log("datattt",data)
     
      if(data.token){
         toast.success(data.message)
          navigate("/verify");
      }else{
        toast.warning(data.message)
         setLoading(false)
      }
      // verify otp
       
     
    } catch (error) {
      console.error("Error:", error);
      alert("Network error, please try again");
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 text-center">Create Account</h2>
        <p className="mt-2 text-sm text-gray-600 text-center">
          Sign up to get started with CLASSYSHOP
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInput}
              placeholder="Abhay"
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
              name="email"
              value={formData.email}
              onChange={handleInput}
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
              name="password"
              value={formData.password}
              onChange={handleInput}
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
              value={formData.confirmPassword}
              onChange={handleInput}
              name="confirmPassword"
              placeholder="••••••••"
              className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="isConfirm" checked={formData.isConfirm} id="terms" onChange={handleInput} className="rounded border-gray-300" />
            <label htmlFor="terms">
              I agree to the{" "}
              <Link to="/terms" className="text-indigo-600 hover:underline">
                Terms & Conditions
              </Link>
            </label>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={loading}
         
            className="w-full !bg-primary hover:!bg-indigo-700 !cursor-pointer !text-white !py-2 !rounded-lg !font-medium"
          >
            {loading ? "Registering..." : "Register"}
          </Button>
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
