import React from "react";
import MovieCard from "../components/MovieCard";
import useMoveList from "../hooks/useMovieList";

const Home = () => {
  const movieList = useMoveList("Avengers");

  return (
    <div className="flex flex-wrap items-center justify-center p-4 gap-4">
      {movieList.map((movie) => (
        <MovieCard
          key={movie.imdbID}
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
