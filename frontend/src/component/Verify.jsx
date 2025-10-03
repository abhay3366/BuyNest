import React, { useState } from "react";

const Verify = () => {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      alert(`OTP Submitted: ${otp}`);
    } else {
      alert("Please enter all 6 digits");
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
          className="w-full cursor-pointer mt-6 bg-primary hover:bg-indigo-700 text-white font-medium py-3 rounded-lg shadow-lg transition-all"
        >
          Verify OTP
        </button>

        <p className="mt-4 text-sm text-gray-500">
          Didn’t get the code?{" "}
          <button className="text-primary font-semibold hover:underline">
            Resend
          </button>
        </p>
      </div>
    </div>
  );
};

export default Verify;
