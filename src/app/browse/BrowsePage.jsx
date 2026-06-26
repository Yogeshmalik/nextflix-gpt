"use client";

import React from "react";
import OriginalsBanner from "@/components/OriginalsBanner";
import MediaContainer from "@/components/MediaContainer";

/**
 * // Netflix Originals (TV Shows from Netflix Network)
const { movies: originals } = useMovies("discover/tv?with_network=213", "originals");

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
 * 
 * // Action Movies (Genre ID: 28)
const { movies: action } = useMovies("discover/movie?with_genres=28", "action");

// Thriller Movies (Genre ID: 53)
const { movies: thriller } = useMovies("discover/movie?with_genres=53", "thriller");

// Comedy Movies (Genre ID: 35)
const { movies: comedy } = useMovies("discover/movie?with_genres=35", "comedy");

// Horror Movies (Genre ID: 27)
const { movies: horror } = useMovies("discover/movie?with_genres=27", "horror");

// Romance Movies (Genre ID: 10749)
const { movies: romance } = useMovies("discover/movie?with_genres=10749", "romance");

// Documentaries (Genre ID: 99)
const { movies: documentaries } = useMovies("discover/movie?with_genres=99", "documentaries");

// Sports Movies (Keyword ID: 6075)
const { movies: sports } = useMovies("discover/movie?with_keywords=6075", "sports");
 * 
 */

const BrowsePage = () => {
  // const { user } = useAuth();

  return (
    <div className="w-full text-white h-full pb-20">
      <OriginalsBanner />
      <MediaContainer />
    </div>
  );
};

export default BrowsePage;
