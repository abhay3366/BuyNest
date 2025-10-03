import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white">MyStore</h2>
          <p className="mt-4 text-sm">
            Your one-stop shop for fashion, electronics, and more.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Shop</h3>
          <ul className="space-y-2">
            <li><Link to="/fashion" className="hover:text-white">Fashion</Link></li>
            <li><Link to="/electronics" className="hover:text-white">Electronics</Link></li>
            <li><Link to="/grocery" className="hover:text-white">Grocery</Link></li>
            <li><Link to="/beauty" className="hover:text-white">Beauty</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
            <li><Link to="/returns" className="hover:text-white">Returns</Link></li>
            <li><Link to="/orders" className="hover:text-white">Order Status</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <form className="flex flex-col sm:flex-row sm:items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-lg w-full sm:w-auto flex-1 text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2025 MyStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
