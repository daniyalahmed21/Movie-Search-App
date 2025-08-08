import React, { useContext, useState } from "react";
import useMovieList from "../hooks/useMovieList";
import useDebounce from "../hooks/useDebounce";
import { Link, useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [showSearchList, setShowSearchList] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const debouncedSearch = useDebounce((value) => {
    setSearchQuery(value);
  }, 300);

  const updateTheme = () =>{
    if(theme === "dark"){
      setTheme("light")
      localStorage.setItem("app-theme","light")
    }else{
      setTheme("dark")
      localStorage.setItem("app-theme","dark")
    }
  }
  const movieList = useMovieList(searchQuery);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-300 dark:border-gray-700 px-4 sm:px-8 md:px-16 py-3 relative transition-colors duration-300">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold text-gray-800 dark:text-white">
          <Link to={"/"}>🎬 MovieApp</Link>
        </div>

        <div className="relative flex-1 mx-6 max-w-xl">
          <input
            type="text"
            onFocus={() => setShowSearchList(true)}
            onBlur={() => setTimeout(() => setShowSearchList(false), 150)}
            onChange={(e) => debouncedSearch(e.target.value)}
            placeholder="Search movies..."
            className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-colors duration-300"
          />

          {showSearchList && movieList.length > 0 && (
            <div className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg max-h-60 overflow-y-auto transition-colors duration-300">
              {movieList.map((movie, index) => (
                <div
                  key={index}
                  onMouseDown={() => {
                    setSearchQuery(movie.Title);
                    setShowSearchList(false);
                    navigate(`/movie/${movie.imdbID}`);
                  }}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-gray-800 dark:text-white transition-colors duration-300"
                >
                  {movie.Title}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() =>
            setTheme(updateTheme)
          }
          className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 transition-colors duration-300"
        >
          🌓
        </button>
      </div>
    </nav>
  );
};

export default Navbar;