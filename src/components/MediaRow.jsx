import React from "react";
import MediaCard from "./MediaCard";

const MediaRow = ({ rowTitle, media }) => {
  // If there's no media data yet, don't render the row.
  if (!media || media?.length === 0) return null;

  console.log("media: ", media);
  return (
    <div className="my-4 md:my-8">
      <p className="my-2 md:my-3 text-xl md:text-2xl border-l-4 pl-2 font-bold border-red-500">
        {rowTitle}
      </p>
      <div className="flex py-4 overflow-x-scroll overflow-y-hidden scroll-smooth scrollbar-none -ml- pl-2 rounded-md ">
        {media?.map((item) => (
          <MediaCard
            key={item?.id}
            posterPath={item?.poster_path}
            title={item?.title}
            vote_average={item?.vote_average}
            release_date={item?.release_date}
            first_air_date={item?.first_air_date}
            original_language={item?.original_language}
            original_title={item?.original_title}
            original_name={item?.original_name}
            name={item?.name}
            media_type={item?.media_type}
            overview={item?.overview}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaRow;
