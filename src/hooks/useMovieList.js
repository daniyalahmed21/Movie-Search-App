import axios from "axios";
import { searchMovie } from "../api/omdb";
import { useEffect, useState } from "react";

function useMoveList(...args) {
  const [movieList, setMovieList] = useState([]);
  async function downloadDefaultMovies(...args) {
    try {
      const urls = args.map((arg) => searchMovie(arg));

      const response = await axios.all(urls.map((url) => axios.get(url)));

      if (response[0]?.data.Error) {
        setMovieList([]);
      } else {
        response.map((res) =>
          setMovieList((prev) => [...prev, ...res.data.Search])
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    downloadDefaultMovies(...args);
  }, [...args]);

  return movieList;
}

export default useMoveList;
