import React from "react";

const MyAccount = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto max-w-4xl bg-white shadow-xl rounded-2xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Section - Profile Image */}
        <div className="md:w-1/3 bg-indigo-50 flex flex-col items-center justify-center p-6">
          <div className="relative">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-indigo-500 object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full cursor-pointer hover:bg-indigo-700 transition">
              ✎
            </div>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-gray-800 text-center">
            John Doe
          </h2>
          <p className="text-gray-500 text-sm text-center">+91 9876543210</p>
        </div>

        {/* Right Section - Account Info */}
        <div className="md:w-2/3 p-8 flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">My Account</h2>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="text"
                placeholder="+91 9876543210"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>
          </div>

          <button className="w-full md:w-auto bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition mt-4">
            Update Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
