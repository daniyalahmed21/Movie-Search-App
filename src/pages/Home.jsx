import axios from "axios";
import React, { useEffect, useState } from "react";
import { searchMovie } from "../api/omdb";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  async function downloadDefaultMovies(...args) {
    const urls = args.map((arg) => searchMovie(arg));

    const response = await axios.all(urls.map((url) => axios.get(url)));

    response.map((res) =>
      setMovieList((prev) => [...prev, ...res.data.Search])
    );
  }

  useEffect(() => {
    downloadDefaultMovies("Harry", "Avengers");
  }, []);

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
