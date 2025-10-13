import React, { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { login } from "../utils/authSlice";
import { useDispatch } from 'react-redux'

const Verify = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const navigate=useNavigate()
  const dispatch=useDispatch();

  const {token,user} = JSON.parse(localStorage.getItem("userData"));
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      alert("Please enter all 6 digits");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("http://localhost:8000/users/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token,otp }),
      });

      const data = await res.json();
      setResponseData(data);
      console.log("Response:", data);

      if (res.ok) {
        // alert("OTP Verified Successfully!");
        toast.success("User Registered Successfully");
        dispatch(login(true))
        navigate('/')

      } else {
        alert(data.message || "OTP Verification Failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F1F3F6]">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[90%] max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify OTP</h2>
        <p className="text-gray-500 text-sm mb-6">
          Enter the 6-digit code sent to your registered email/phone
        </p>

        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
          maxLength={6}
          className="w-full tracking-[1em] text-center text-2xl font-semibold border border-gray-300 rounded-lg py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-gray-300"
          placeholder="••••••"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full mt-6 ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-indigo-700"
          } text-white font-medium py-3 rounded-lg shadow-lg transition-all`}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        <p className="mt-4 text-sm text-gray-500">
          Didn’t get the code?{" "}
          <button className="text-primary font-semibold hover:underline">Resend</button>
        </p>
      </div>
    </div>
  );
};

export default Verify;
