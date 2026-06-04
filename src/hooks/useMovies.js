import { TMDB_MOVIE_COMMON_URL, TMDB_MOVIE_OPTIONS } from "@/utils/constants";
import { useEffect, useState } from "react";

const useMovies = (type, page) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies(type, page);
  }, [type, page]);

  const fetchMovies = async (type, page) => {
    try {
      setLoading(true);
      const fetchData = await fetch(
        `${TMDB_MOVIE_COMMON_URL}${type}?page=${page}`,
        TMDB_MOVIE_OPTIONS,
      );
      const dataJson = await fetchData.json();
      setMovies(dataJson.results || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, movies };
};

export default useMovies;
