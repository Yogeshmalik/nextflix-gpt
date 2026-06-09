import React, { useEffect, useState } from "react";
import useMovies from "@/hooks/useMovies";

const OriginalsBanner = () => {
  const { movies: trending } = useMovies("trending/all/day", "trending");

  const [randomMovie, setRandomMovie] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    // Pick ONE random movie/show from the combined trending list on load
    if (trending && trending.length > 0 && !randomMovie) {
      const randomIndex = Math.floor(Math.random() * trending.length);
      setRandomMovie(trending[randomIndex]);
    }
  }, [trending, randomMovie]);

  // Prepare dynamic variables for fetching the video via our DRY hook
  const mediaType = randomMovie?.media_type || "movie";
  const videoEndpoint = randomMovie
    ? `${mediaType}/${randomMovie.id}/videos`
    : null;
  const videoCategory = randomMovie ? `video_${randomMovie.id}` : null;

  // SMART HOOK: Fetches video data dynamically and caches it in Redux seamlessly!
  const { movies: bannerVideos } = useMovies(videoEndpoint, videoCategory);
  useEffect(() => {
    if (bannerVideos && bannerVideos.length > 0) {
      // Filter for Trailers first, fallback to Teasers
      const validVideos = bannerVideos.filter(
        (vid) => vid.type === "Trailer" || vid.type === "Teaser",
      );

      if (validVideos.length > 0) {
        const trailer = validVideos.find((vid) => vid.type === "Trailer");
        const videoToSet = trailer || validVideos[0];
        setSelectedVideo(videoToSet);

        console.log("🎬 Movie/TV Details:", randomMovie);
        console.log("▶️ Selected Video:", videoToSet);
        console.log(
          "▶️ Trailer URL:",
          `https://www.youtube.com/watch?v=${videoToSet.key}`,
        );
      } else {
        console.log(
          "No trailer or teaser found for this movie. Skipping video playback.",
        );
      }
    }
  }, [bannerVideos, randomMovie]);

  // if (!trending || !randomMovie) {
  //   return (
  //     <div className="w-full h-screen flex items-center justify-center text-white bg-black">
  //       Loading Banner...
  //     </div>
  //   );
  // }

  return (
    <div className="relative overflow-hidden w-full h-screen text-white p-8">
      {/* Conditionally render the iframe only when a video is available */}
      {selectedVideo && (
        <iframe
          width="560"
          height="315"
          // Example styling for a full-screen background video
          className="inset-0 aspect-video absolute top-1/2 left-1/2 min-w-screen min-h-screen  w-[177.78vh] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src={`https://www.youtube.com/embed/${selectedVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${selectedVideo.key}&modestbranding=1&rel=0&showinfo=0`}
          title="YouTube video player"
          allow="autoplay"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
       <div className="absolute inset-0 z-10 bg-linear-to-r from-black via-black/50 to-transparent" />

  <div className="relative z-20 p-16">
        <h1
          key={randomMovie?.id}
          className="text-3xl z-30 md:text-5xl font-bold"
        >
          {randomMovie?.title || randomMovie?.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg z-40 line-clamp-3">
          {randomMovie?.overview}
        </p>
      </div>
    </div>
  );
};

export default OriginalsBanner;
