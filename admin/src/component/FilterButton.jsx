import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const FilterButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 cursor-pointer px-4 py-2 border-1 border-gray-200 text-gray-500 rounded-lg hover:bg-gray-50 transition"
      >
        <FaFilter /> Filter
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border p-2">
          <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100">Today</button>
          <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100">This Week</button>
          <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100">This Month</button>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
