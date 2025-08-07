import React from "react";

const MovieRating = ({ imdbRating, Ratings = [] }) => {
  return (
    <div className="mt-4 text-sm text-gray-800">
      {imdbRating && imdbRating !== "N/A" && (
        <div className="mb-2">
          <strong>IMDb Rating:</strong> ⭐ {imdbRating}/10
        </div>
      )}

      {Ratings.length > 0 && (
        <div>
          <strong>Other Ratings:</strong>
          <ul className="list-disc ml-5 mt-1">
            {Ratings.map((rating, index) => (
              <li key={index}>
                {rating.Source}: {rating.Value}
              </li>
            ))}
          </ul>
        </div>
      )}

      {imdbRating === "N/A" && Ratings.length === 0 && (
        <div>No ratings available.</div>
      )}
    </div>
  );
};

export default MovieRating;
