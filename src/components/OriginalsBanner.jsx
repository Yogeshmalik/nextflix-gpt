import React, { useEffect, useState } from "react";
import useMovies from "@/hooks/useMovies";
import Button from "./Button";

const OriginalsBanner = () => {
  const { movies: trending } = useMovies("trending/all/day", "trending");
  const [randomMovie, setRandomMovie] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [overviewExpand, setOverviewExpand] = useState(false);

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

  const handleTruncate = () => {
    setOverviewExpand(!overviewExpand);
  };

  // if (!trending || !randomMovie) {
  //   return (
  //     <div className="w-full h-screen flex items-center justify-center text-white bg-black">
  //       Loading Banner...
  //     </div>
  //   );
  // }

  return (
    <div className="relative overflow-hidden w-full md:h-screen text-white pt-24 p-4 md:p-8">
      {/* Conditionally render the iframe only when a video is available */}
      {selectedVideo && (
        <iframe
          width="560"
          height="315"
          // Example styling for a full-screen background video
          className="inset-0 aspect-video absolute top-0 left-0 md:top-1/2 md:left-1/2 min-w-screen min-h-screen w-[177.78vh] h-[56.25vw] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src={`https://www.youtube.com/embed/${selectedVideo.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${selectedVideo.key}&modestbranding=1&rel=0&showinfo=0`}
          title="YouTube video player"
          allow="autoplay"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
      <div className="absolute h-auto md:h-screen justify-center md:pt-36 flex flex-col max-w-2xl md:max-w-[50%] w-full inset-0 z-10 bg-linear-to-r from-black via-black/50 to-transparent" />

      <div className="relative md:h-screen space-y-1 h-auto md:justify-center md:pt-36 flex flex-col max-w-sm w-full z-20 md:p-16 lg:p-28 md:max-w-[50%]">
        <h3 className="uppercase hidden md:block tracking-widest font-mono text-gray-400 font-semibold pl-1">
          {mediaType || ""}
        </h3>
        <h1 className="text-3xl md:py-2 md:text-5xl font-bold">
          {randomMovie?.title || randomMovie?.name}
        </h1>
        <span className="flex space-x-1 font-mono text-base items-center font-bold md:pt-4">
          {randomMovie?.vote_average ? (
            <span className="flex space-x-1 items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Star_Green.svg/250px-Star_Green.svg.png"
                alt="star rating icon"
                className="flex w-4 h-4"
              />

              <p className=" md:max-w-2xl text-green-500 flex tracking-tighter">
                {randomMovie?.vote_average?.toFixed(2)}
              </p>
            </span>
          ) : (
            <span className="flex items-center">No Ratings</span>
          )}
          {randomMovie?.release_date || randomMovie?.first_air_date && (
            <span className="flex bg-gray-500 rounded-full h-1 w-1 mx-1" />
          )}
          <p className="my-auto pl-1 text-white flex items-baseline tracking-tighter">
            {randomMovie?.release_date?.split("-")[0] ||
              "" ||
              randomMovie?.first_air_date?.split("-")[0]}
          </p>
          {randomMovie?.original_language && (
            <span className="flex bg-gray-500 rounded-full h-1 w-1 mx-1" />
          )}
          <p className=" md:max-w-2xl my-auto border border-gray-500 px-1 md:p-2 md:h-5 text-white flex items-center tracking-tighter uppercase">
            {randomMovie?.original_language}
          </p>
        </span>
        <p
          onClick={handleTruncate}
          className={`md:pt-4 md:max-w-2xl text-sm md:text-base text-gray-400 cursor-pointer 
            ${!overviewExpand ? "line-clamp-2 md:line-clamp-3" : ""}`}
        >
          {randomMovie?.overview}
        </p>
        <div className="flex space-x-3 py-2 md:py-4 w-full">
          <Button
            className="bg-white hover:opacity-85 text-black"
            src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-play-icon-png-image_956416.jpg"
            label="Play"
          />
          <Button
            className="bg-zinc-600 opacity-80 hover:opacity-75 text-white"
            src="https://tsk-rlp.de/wp-content/uploads/2023/11/600px-Infobox_info_icon_white.svg.png"
            label="More Info"
          />
        </div>
      </div>
    </div>
  );
};

export default OriginalsBanner;
