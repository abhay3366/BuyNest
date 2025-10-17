import React, { useState } from "react";

const ResetPassword = () => {
    const [formData,setFormData]=useState({
        password:"",
        confirmPassword:""
    })
   
    const handleInput=(e)=>{
        e.preventDefault();
        const {value,name}=e.target
        setFormData((prev)=>({...prev,[name]:value}))
    }
     console.log("🚀 ~ ResetPassword ~ formData:", formData)
    const handleUpdatePassword = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    const token = JSON.parse(localStorage.getItem("otpToken"));
    console.log("🚀 ~ handleUpdatePassword ~ token:", token);

    try {
        const response = await fetch("http://localhost:8000/users/reset-password", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password: formData.password,
                token: token
            }),
        });

        const data = await response.json();
        console.log("🚀 ~ handleUpdatePassword ~ data:", data)

        if (data.ok) {
            console.log("Success:", data.message);
            alert("Password updated successfully!");
        } else {
            console.log("Failed:", data.message);
            alert("Failed: " + data.message);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong. Try again.");
    }
};

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          🔐 Reset Password
        </h2>

        <form className="space-y-5" onSubmit={handleUpdatePassword}>
          {/* New Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700 "
            >
              New Password
            </label>
            <input
              type="text"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInput}
              placeholder="Enter new password"
              className="w-full p-2.5 rounded-lg border border-gray-300 ext-gray-900  focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirm"
              className="block mb-2 text-sm font-medium text-gray-700 "
            >
              Confirm Password
            </label>
            <input
              type="text"
               onChange={handleInput}
              id="confirm"
               value={formData.confirmPassword}
              name="confirmPassword"
              placeholder="Re-enter password"
              className="w-full p-2.5 rounded-lg border border-gray-300 dark:border-gray-700   text-gray-900  focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Update Password
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Remembered your password?{" "}
          <a
            href="/login"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
