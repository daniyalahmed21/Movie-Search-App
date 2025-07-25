import React from "react";

const MovieCard = ({ Title, Year, Type, Poster }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-64">
      <img
        src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450?text=No+Image"}
        alt={Title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{Title}</h2>
        <p className="text-sm text-gray-600">{Year}</p>
        <p className="text-sm text-gray-500 capitalize">{Type}</p>
      </div>
    </div>
  );
};

export default MovieCard;
