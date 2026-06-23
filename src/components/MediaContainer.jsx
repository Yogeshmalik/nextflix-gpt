import useMovies from "@/hooks/useMovies";
import React from "react";
import MediaRow from "./MediaRow";

const MediaContainer = () => {
  // Netflix Originals (TV Shows from Netflix Network)
  const { movies: originals } = useMovies(
    "discover/tv?with_network=213",
    "originals",
  );

  // Trending All (Movies & TV Shows trending today)
  const { movies: trending } = useMovies("trending/all/day", "trending");

  // Now Playing (Movies currently in theaters)
  const { movies: nowPlaying } = useMovies("movie/now_playing", "nowPlaying");

  // Popular Movies
  const { movies: popular } = useMovies("movie/popular", "popular");

  // Top Rated Movies
  const { movies: topRated } = useMovies("movie/top_rated", "topRated");

  // Upcoming Movies
  const { movies: upcoming } = useMovies("movie/upcoming", "upcoming");

  // Action Movies (Genre ID: 28)
  const { movies: action } = useMovies(
    "discover/movie?with_genres=28",
    "action",
  );

  // Thriller Movies (Genre ID: 53)
  const { movies: thriller } = useMovies(
    "discover/movie?with_genres=53",
    "thriller",
  );

  // Comedy Movies (Genre ID: 35)
  const { movies: comedy } = useMovies(
    "discover/movie?with_genres=35",
    "comedy",
  );

  // Horror Movies (Genre ID: 27)
  const { movies: horror } = useMovies(
    "discover/movie?with_genres=27",
    "horror",
  );

  // Romance Movies (Genre ID: 10749)
  const { movies: romance } = useMovies(
    "discover/movie?with_genres=10749",
    "romance",
  );

  // Documentaries (Genre ID: 99)
  const { movies: documentaries } = useMovies(
    "discover/movie?with_genres=99",
    "documentaries",
  );

  // Sports Movies (Keyword ID: 6075)
  const { movies: sports } = useMovies(
    "discover/movie?with_keywords=6075",
    "sports",
  );

  return (
    <div className="z-10 mt-0 md:-mt-44 px-4 md:px-12 relative space-y-4">
      <MediaRow rowTitle="Originals" media={originals} />
      <MediaRow rowTitle="Now Playing" media={nowPlaying} />
      <MediaRow rowTitle="Trending" media={trending} />
      <MediaRow rowTitle="Popular" media={popular} />
      <MediaRow rowTitle="Top Rated" media={topRated} />
      <MediaRow rowTitle="Upcoming" media={upcoming} />
      <MediaRow rowTitle="Action" media={action} />
      <MediaRow rowTitle="Thriller" media={thriller} />
      <MediaRow rowTitle="Comedy" media={comedy} />
      <MediaRow rowTitle="Horror" media={horror} />
      <MediaRow rowTitle="Romance" media={romance} />
      <MediaRow rowTitle="Documentaries" media={documentaries} />
      <MediaRow rowTitle="Sports" media={sports} />
    </div>
  );
};

export default MediaContainer;
