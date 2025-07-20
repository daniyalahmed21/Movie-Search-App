import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 sm:px-8 md:px-16 py-3 flex items-center justify-between gap-4">
      {/* Logo */}
      <div className="text-xl font-bold whitespace-nowrap">🎬 MovieApp</div>

      {/* Search Bar */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full max-w-md px-4 py-2 rounded-md focus:outline-none border border-gray-500 text-black"
        />
      </div>

      {/* Theme Toggle Button */}
      <button className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-md whitespace-nowrap">
        🌓
      </button>
    </nav>
  );
};

export default Navbar;
