import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import {
  MdDashboard,
  MdViewCarousel,
  MdInventory,
  MdPeople,
  MdShoppingBag,
  MdSettings,
  MdLogout,
} from "react-icons/md";

const Sidebar = () => {
  const [openSlides, setOpenSlides] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);

  return (
    <aside className="w-64 fixed top-0 h-screen bg-white border-r border-gray-200">
      
      {/* Logo */}
      <div className="px-6 py-4 text-xl font-semibold text-indigo-600 border-b">
        BuyNest Admin
      </div>

      <nav className="px-4 py-4 space-y-1">

        {/* Dashboard */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100 transition">
          <MdDashboard className="text-lg" />
          Dashboard
        </div>

        {/* Home Slides */}
        <div>
          <button
            onClick={() => setOpenSlides(!openSlides)}
            className="flex items-center justify-between w-full px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            <div className="flex items-center gap-3">
              <MdViewCarousel className="text-lg" />
              <span>Home Slides</span>
            </div>
            <FaAngleDown
              className={`transition-transform duration-300 ${
                openSlides ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out
              ${openSlides ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <div className="px-4 py-2 flex items-center text-sm text-gray-600 rounded-lg hover:bg-gray-100 cursor-pointer transition">
              <GoDotFill className="text-gray-300 mr-1" />
              Home Banner List
            </div>
            <div className="px-4 py-2 flex items-center text-sm text-gray-600 rounded-lg hover:bg-gray-100 cursor-pointer transition">
              <GoDotFill className="text-gray-300 mr-1" />
              Add Home Banner Slide
            </div>
          </div>
        </div>

        {/* Products */}
        <div>
          <button
            onClick={() => setOpenProducts(!openProducts)}
            className="flex items-center justify-between w-full px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            <div className="flex items-center gap-3">
              <MdInventory className="text-lg" />
              <span>Products</span>
            </div>
            <FaAngleDown
              className={`transition-transform duration-300 ${
                openProducts ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`ml-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ease-in-out
              ${openProducts ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            <div className="px-4 py-2 flex items-center text-sm text-gray-600 rounded-lg hover:bg-gray-100 cursor-pointer transition">
              <GoDotFill className="text-gray-300 mr-1" />
              Product Upload
            </div>
            <div className="px-4 py-2 flex items-center text-sm text-gray-600 rounded-lg hover:bg-gray-100 cursor-pointer transition">
              <GoDotFill className="text-gray-300 mr-1" />
              Product List
            </div>
            <div className="px-4 py-2 flex items-center text-sm text-gray-600 rounded-lg hover:bg-gray-100 cursor-pointer transition">
              <GoDotFill className="text-gray-300 mr-1" />
              Categories
            </div>
          </div>
        </div>

        {/* Other links */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100 transition">
          <MdPeople className="text-lg" />
          Users
        </div>

        <div className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100 transition">
          <MdShoppingBag className="text-lg" />
          Orders
        </div>

        <div className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100 transition">
          <MdSettings className="text-lg" />
          Settings
        </div>

        <div className="flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer text-red-500 hover:bg-red-50 transition">
          <MdLogout className="text-lg" />
          Logout
        </div>

      </nav>
    </aside>
  );
};

export default Sidebar;
