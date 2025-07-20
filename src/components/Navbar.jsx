import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-300 px-4 sm:px-8 md:px-16 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold text-gray-800">🎬 MovieApp</div>

        {/* Search Bar */}
        <div className="flex-1 mx-6 max-w-xl">
          <input
            type="text"
            placeholder="Search movies..."
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder:text-gray-500"
          />
        </div>

        {/* Theme Toggle Button */}
        <button className="text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md px-3 py-2 transition">
          🌓
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
