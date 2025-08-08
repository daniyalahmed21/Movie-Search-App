import React from "react";
import MovieCard from "../components/MovieCard";
import useMoveList from "../hooks/useMovieList";

const Home = () => {
  const movieList = useMoveList("Avengers");

  return (
    <div
      className="flex flex-wrap items-center justify-center p-4 gap-4 transition-colors duration-300 dark:bg-gray-900 dark:text-white
          bg-gray-100 text-gray-800"
    >
      {movieList.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          imdbID={movie.imdbID}
          Title={movie.Title}
          Year={movie.Year}
          Type={movie.Type}
          Poster={movie.Poster}
        />
      ))}
    </div>
  );
};

export default Home;
