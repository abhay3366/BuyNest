import React, { useRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../utils/authSlice";


const SignIn = () => {
  const [showPassword, hidePassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [otpForm,setOtpForm]=useState(true);
  // handle password
  const [forgotPasswordForm, setforgotPasswordForm] = useState(false)
  // handle email
  const [handleForgotEmailInput,setHandleForgotEmailInput]=useState({
    email:""
  })
  const dispatch = useDispatch()
  const navigate = useNavigate();


  // handle password
  const forgotPassword = (e) => {
    e.preventDefault();
    setforgotPasswordForm(true)
  }
  // handle password icon
  const handleIcon = () => {
    hidePassword(!showPassword)
  }

  // handle input of form
  const handleInput = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    setFormData((prev) => ({ ...prev, [name]: value }))
  }


// on submit handle login
const handleLogin = async (e) => {
  e.preventDefault();
  const res = await fetch('http://localhost:8000/users/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  const data = await res.json();

  if (data.token) {
    // Save token to localStorage or sessionStorage
    dispatch(login(true))
    const localStorageData = {
      "token": data.token,
      user: {
        name: data.name,
        email: data.email
      }
    }
    localStorage.setItem("userData", JSON.stringify(localStorageData));
    navigate("/");
  } else {
    alert(data.message);
  }

}
  // handle input of forgot password
  const handleEmailInputField =async(e)=>{
      e.preventDefault();
    const {value}=e.target;
    setHandleForgotEmailInput({email:value})
  }
 console.log("handleForgotEmailInput",handleForgotEmailInput)

  // handle forgot password
  const handleForgot=async(e)=>{
    e.preventDefault();
    const response=await fetch('http://localhost:8000/users/forgot-password',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
       body: JSON.stringify(handleForgotEmailInput)
    })
    const data=await response.json();
    // set localstorage
    localStorage.setItem("otpToken",JSON.stringify({"token":data.token,"email":data.email}))
  
    if(data.token){
      navigate("/VerifyOtpForgotPassword");
    }
    
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {
        forgotPasswordForm ? (<div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 text-center"> Forgot Your Password</h2>
          <p className="mt-2 text-sm text-gray-600 text-center">
          Please enter the email address you'd like your password reset the information sent to
          </p>

          {/* Form */}
          <form className="mt-6 space-y-4" onSubmit={handleForgot}>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                onChange={handleEmailInputField}
                value={handleForgotEmailInput.email}
                name="email"
                placeholder=""
                className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

          

            {/* Reset Password */}
            {/* <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
               Reset Password
              </label>
              <input
                type={showPassword == true ? "text" : "password"}
                id="password"
                name="password"
                onChange={handleInput}
                value={formData.password}
                placeholder=""
                className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"

              />
              <span onClick={handleIcon} className="absolute top-1/2 right-0 cursor-pointer p-1 w-[30px]">
                {showPassword == true ? <FaRegEye /> : <FaRegEyeSlash />} </span>

            </div> */}

           

            {/* Submit */}
            <button
              type="submit"
              className="w-full cursor-pointer bg-primary hover:bg-indigo-700 text-white py-2 rounded-lg font-medium"
            >
              Next
            </button>
          </form>

          {/* Sign Up Link */}
          {/* <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link to="/register" className="text-indigo-600 font-medium hover:underline">
              Sign Up
            </Link>
          </p> */}
        </div>) : (
          <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-900 text-center">Sign In</h2>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Welcome back! Please enter your details.
            </p>

            {/* Form */}
            <form className="mt-6 space-y-4" onSubmit={handleLogin}>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={handleInput}
                  value={formData.email}
                  name="email"
                  placeholder=""
                  className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type={showPassword == true ? "text" : "password"}
                  id="password"
                  name="password"
                  onChange={handleInput}
                  value={formData.password}
                  placeholder=""
                  className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"

                />
                <span onClick={handleIcon} className="absolute top-1/2 right-0 cursor-pointer p-1 w-[30px]">
                  {showPassword == true ? <FaRegEye /> : <FaRegEyeSlash />} </span>

              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Remember me
                </label>
                <Link onClick={forgotPassword} className="text-indigo-600 hover:underline">
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full cursor-pointer bg-primary hover:bg-indigo-700 text-white py-2 rounded-lg font-medium"
              >
                Sign In
              </button>
            </form>

            {/* Sign Up Link */}
            <p className="mt-6 text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link to="/register" className="text-indigo-600 font-medium hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        )
      }

    </div>
  );
};

export default SignIn;
