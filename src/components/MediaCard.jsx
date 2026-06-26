import { IMG_CDN_URL } from "@/utils/constants";

const MediaCard = ({ posterPath }) => {
  // Don't render the card if there's no poster
  if (!posterPath) return null;

  return (
    <div
      className="max-w-36 h-full p- flex md:max-w-48 w-full mr-4 shrink-0 
      hover:scale-110 ease-in-out duration-200 transition-all cursor-pointer overflow-hidden rounded-md"
    >
      <div className="flex ">
        <img
          src={IMG_CDN_URL + posterPath}
          alt="Media Poster"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default MediaCard;
