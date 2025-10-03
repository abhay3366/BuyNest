import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <div className="h-48 bg-gray-200">
        {/* blog image here */}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Blog Title
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Short blog excerpt goes here...
        </p>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-xs text-gray-500">Author • Date</span>
          <Link to="/blog/single" className="text-sm text-indigo-600 font-medium">
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
