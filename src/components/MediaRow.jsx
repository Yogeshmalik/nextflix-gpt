import React from "react";
import MediaCard from "./MediaCard";

const MediaRow = ({ rowTitle, media }) => {
  // If there's no media data yet, don't render the row.
  if (!media || media?.length === 0) return null;

  return (
    <div className="my-4 md:my-8">
      <p className="my-2 md:my-4 text-xl md:text-2xl border-l-4 pl-2 font-bold border-red-500">
        {rowTitle}
      </p>
      <div className="flex py-4 overflow-x-scroll overflow-y-hidden scroll-smooth scrollbar-none -ml- rounded-md ">
        {media?.map((item) => (
          <MediaCard key={item?.id} posterPath={item?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MediaRow;
