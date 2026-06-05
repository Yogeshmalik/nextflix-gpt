import React, { useEffect } from "react";
import useMovies from "@/hooks/useMovies";

const OriginalsHeader = () => {
  // The smart hook checks Redux, fetches if needed, and returns the Redux data.
  // It prevents duplicate API calls automatically!
  const { loading, movies: originals } = useMovies(
    "discover/tv?with_network=213",
    "originals",
  );

  useEffect(() => {
    if (originals && originals.length > 0) {
      console.log("My Netflix Originals List:", originals);
    }
  }, [originals]);

  if (loading && (!originals || originals.length === 0))
    return <div>Loading Banner...</div>;

  return (
    <div className="bg-black text-white p-4">
      <h1 className="text-3xl font-bold">Netflix Originals</h1>
    </div>
  );
};

export default OriginalsHeader;
