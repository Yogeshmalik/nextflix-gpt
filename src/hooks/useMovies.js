import { TMDB_BASE_URL, TMDB_MOVIE_OPTIONS } from "@/utils/constants";
import { useEffect, useState } from "react";
import { addCategoryData } from "@/utils/store/slices/movieSlice";
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks";

const useMovies = (endpoint, category) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  // 1. Subscribe to the specific category in the Redux store
  const storeData = useAppSelector((store) => store.movies[category]);

  useEffect(() => {
    // 2. Fetch ONLY if data doesn't exist in the store yet
    if (!storeData || storeData.length === 0) {
      fetchData();
    }
  }, [endpoint, category, storeData]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${TMDB_BASE_URL}${endpoint}`,
        TMDB_MOVIE_OPTIONS,
      );
      const dataJson = await response.json();

      // 3. Dispatch data to Redux Store dynamically under the 'category' key
      dispatch(addCategoryData({ category, results: dataJson.results || [] }));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // 4. Return data directly from the Redux store
  return { loading, movies: storeData || [] };
};

export default useMovies;
