import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { searchMovieById } from "../api/omdb";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const movieUrl = searchMovieById(id);

  const downloadMovie = async () => {
    const response = await axios.get(movieUrl);
    setMovie(response.data);
    console.log(movie);
  };

  useEffect(() => {
    downloadMovie();
  },[id]);

  return (
    <div>
   {  movie &&
      <MovieCard
        key={movie.imdbID}
        Title={movie.Title}
        Year={movie.Year}
        Type={movie.Type}
        Poster={movie.Poster}
      />}
    </div>
  );
};

export default MovieDetails;
