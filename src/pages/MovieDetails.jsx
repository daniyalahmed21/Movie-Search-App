import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { searchMovieById } from "../api/omdb";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const movieUrl = searchMovieById(id);

  const downloadMovie = async () => {
    try {
      const response = await axios.get(movieUrl);
      setMovie(response.data);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  useEffect(() => {
    downloadMovie();
  }, [id]);

  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-800">
      {movie && (
        <div className="flex flex-col md:flex-row items-start gap-8 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
          {/* Poster */}
          <div className="w-full md:w-1/3">
            {movie.Poster && movie.Poster !== "N/A" ? (
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-auto object-cover"
              />
            ) : (
              <div className="w-full h-80 bg-gray-200 flex items-center justify-center text-gray-500">
                No Poster Available
              </div>
            )}
          </div>

          {/* Movie Details */}
          <div className="flex-1 p-4">
            <h1 className="text-3xl font-bold mb-2">{movie.Title}</h1>
            <p className="text-sm text-gray-600 mb-1">📅 Year: {movie.Year}</p>
            <p className="text-sm text-gray-600 mb-1">🎬 Type: {movie.Type}</p>
            <p className="text-sm text-gray-600 mb-1">🌍 Country: {movie.Country}</p>
            <p className="text-sm text-gray-600 mb-1">🗣️ Language: {movie.Language}</p>
            <p className="text-sm text-gray-600 mb-1">⏱️ Runtime: {movie.Runtime}</p>
            <p className="text-sm text-gray-600 mb-1">👥 Actors: {movie.Actors}</p>
            <p className="text-sm text-gray-600 mb-4">📝 Plot: {movie.Plot !== "N/A" ? movie.Plot : "No plot available."}</p>

            {/* Ratings */}
            <div className="mt-4">
              {movie.imdbRating && movie.imdbRating !== "N/A" && (
                <div className="mb-2 text-md">
                  <strong>IMDb Rating:</strong>{" "}
                  <span className="text-yellow-600">⭐ {movie.imdbRating}/10</span>
                </div>
              )}

              {(!movie.Ratings || movie.Ratings.length === 0) &&
                (!movie.imdbRating || movie.imdbRating === "N/A") && (
                  <p className="text-sm text-gray-500">No ratings available.</p>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
