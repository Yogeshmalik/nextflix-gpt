import { IMG_CDN_URL, RATING_ICON } from "@/utils/constants";

const MediaCard = ({
  posterPath,
  title,
  vote_average,
  release_date,
  first_air_date,
  original_language,
  original_title,
  original_name,
  name,
  media_type,
  overview,
}) => {
  // Don't render the card if there's no poster
  if (!posterPath) return null;

  return (
    <div
      className="max-w-36 h-full p- flex md:max-w-48 w-full mr-4 shrink-0 
      hover:scale-110 ease-in-out duration-200 transition-all cursor-pointer overflow-hidden rounded-md shadow hover:shadow-2xl"
    >
      <div className="flex flex-col space-y-1 min-w-0">
        <span className="group relative flex overflow-hidden">
          <img
            src={IMG_CDN_URL + posterPath}
            alt="Media Poster"
            className="w-full h-full object-cover transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <span className="absolute inset-0 flex flex-col items-start justify-end p-2 text-left text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 space-x-1 space-y-1">
            <p className="uppercase font-bold">
              {title || original_title || original_name || name}
            </p>
            <span className="flex space-x-1 items-center font-semibold font-mono">
              {vote_average ? (
                <span className="flex text-green-500 space-x-1 items-center">
                  <img
                    src={RATING_ICON}
                    alt="star rating icon"
                    className="flex w-4 h-4"
                  />

                  <p className=" md:max-w-2xl flex tracking-tighter">
                    {vote_average?.toFixed(2)}
                  </p>
                </span>
              ) : (
                <span className="flex items-center">No Ratings</span>
              )}
              {(release_date || first_air_date) && (
                <span className="flex bg-gray-500 rounded-full h-1 w-1 mx-1" />
              )}
              <p className="my-auto pl-1 flex items-baseline tracking-tighter">
                {release_date
                  ? release_date?.split("-")[0] || ""
                  : first_air_date?.split("-")[0] || ""}
              </p>
              {original_language && (
                <span className="flex bg-gray-400 rounded-full h-1 w-1 mx-1" />
              )}
              {media_type ? (
                <h3 className=" first-letter:uppercase pl-1">{media_type}</h3>
              ) : (
                <p className="pl-1 uppercase">{original_language}</p>
              )}
            </span>
            <p className="line-clamp-3 text-gray-300 hidden md:line-clamp-6">
              {overview}
            </p>
          </span>
        </span>
        <p
          className="flex font-semibold max-w-[20ch] text-sm hover:max-w-none pb-0.5 truncate 
          hover:whitespace-normal hover:wrap-break-words"
        >
          {title || original_title || original_name || name}
        </p>
        <span className="flex space-x-1 font-mono text-sm text-gray-400 items-center font-bold">
          {vote_average ? (
            <span className="flex space-x-1 items-center">
              <img
                src={RATING_ICON}
                alt="star rating icon"
                className="flex w-4 h-4 grayscale"
              />

              <p className=" md:max-w-2xl flex tracking-tighter">
                {vote_average?.toFixed(2)}
              </p>
            </span>
          ) : (
            <span className="flex items-center">No Ratings</span>
          )}
          {(release_date || first_air_date) && (
            <span className="flex bg-gray-500 rounded-full h-1 w-1 mx-1" />
          )}
          <p className="my-auto pl-1 flex items-baseline tracking-tighter">
            {release_date
              ? release_date?.split("-")[0] || ""
              : first_air_date?.split("-")[0] || ""}
          </p>
          {original_language && (
            <span className="flex bg-gray-400 rounded-full h-1 w-1 mx-1" />
          )}
          {media_type ? (
            <h3 className=" first-letter:uppercase pl-1">{media_type}</h3>
          ) : (
            <p className="pl-1 uppercase">{original_language}</p>
          )}
        </span>
      </div>
    </div>
  );
};

export default MediaCard;
