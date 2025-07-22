import React, { useState } from "react";
import useMovieList from "../hooks/useMovieList";
import useDebounce from "../hooks/useDebounce";

const Navbar = () => {
  const [showSearchList, setShowSearchList] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearch = useDebounce((value) => {
    setSearchQuery(value);
  }, 300);

  const movieList = useMovieList(searchQuery);

  return (
    <nav className="bg-white border-b border-gray-300 px-4 sm:px-8 md:px-16 py-3 relative">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold text-gray-800">🎬 MovieApp</div>

        <div className="relative flex-1 mx-6 max-w-xl">
          <input
            type="text"
            onFocus={() => setShowSearchList(true)}
            onBlur={() => setTimeout(() => setShowSearchList(false), 150)}
            onChange={(e) => debouncedSearch(e.target.value)}
            placeholder="Search movies..."
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder:text-gray-500"
          />

          {showSearchList && movieList.length > 0 && (
            <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {movieList.map((movie, index) => (
                <div
                  key={index}
                  onMouseDown={() => {
                    setSearchQuery(movie.Title);
                    setShowSearchList(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {movie.Title}
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="text-gray-600 hover:text-gray-800 border border-gray-300 rounded-md px-3 py-2 transition">
          🌓
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
