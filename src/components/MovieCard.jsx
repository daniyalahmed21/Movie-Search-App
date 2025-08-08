import React from "react";
import { useNavigate } from "react-router-dom"; // Corrected import

const MovieCard = ({ Title, Year, Type, Poster, imdbID }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${imdbID}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-64 cursor-pointer transition-colors duration-300"
    >
      <img
        src={
          Poster !== "N/A"
            ? Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={Title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          {Title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">{Year}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
          {Type}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;