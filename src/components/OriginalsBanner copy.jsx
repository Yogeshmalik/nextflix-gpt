import React, { useEffect, useState } from "react";
import useMovies from "@/hooks/useMovies";
import { TMDB_MOVIE_OPTIONS } from "@/utils/constants";

const OriginalsBanner = () => {
  const { loading, movies: trending } = useMovies("trending/all/day", "trending");
  const [randomMovie, setRandomMovie] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (trending && trending.length > 0) {
      fetchData();
    }
  }, [trending]);

  const fetchData = async () => {
    // Shuffle the trending array to try them in a random order
    const shuffledTrending = [...trending].sort(() => 0.5 - Math.random());

    for (const movie of shuffledTrending) {
      // trending/all/day returns mixed media types ('movie' or 'tv')
      const mediaType = movie.media_type || "movie";

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${mediaType}/${movie.id}/videos`,
          TMDB_MOVIE_OPTIONS,
        );
        const dataJson = await response.json();

        const videos = dataJson.results;
        if (videos && videos.length > 0) {
          // Filter for trailers and teasers
          const trailersAndTeasers = videos.filter(
            (vid) => vid.type === "Trailer" || vid.type === "Teaser",
          );

          if (trailersAndTeasers.length > 0) {
            // Prefer Trailer, fallback to Teaser
            const trailer = trailersAndTeasers.find(
              (vid) => vid.type === "Trailer",
            );
            const selectedVideo = trailer || trailersAndTeasers[0];

            setRandomMovie(movie);
            setVideo(selectedVideo);

            console.log("Selected Movie details:", movie);
            console.log(
              "Selected Video (Trailer/Teaser) details:",
              selectedVideo,
            );
            return; // Exit once we find a suitable video
          }
        }
      } catch (error) {
        console.error(
          "Error fetching video for",
          movie.title || movie.name,
          error,
        );
      }
    }

    console.log("No trailer or teaser found in the current trending list.");
  };

  if (loading || !randomMovie)
    return (
      <div className="w-full h-screen text-white flex items-center justify-center">
        Loading Banner...
      </div>
    );

  return (
    <div className="bg-black w-full h-screen text-white p-8">
      {randomMovie && (
        <>
          <h1 className="text-3xl font-bold">
            {randomMovie?.title || randomMovie?.name}
          </h1>
          <p className="mt-2 text-lg md:w-1/2">{randomMovie?.overview}</p>
        </>
      )}
    </div>
  );
};

export default OriginalsBanner;
