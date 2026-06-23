export const MAIN_LOGO_URL =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const PLAY_ICON =
  "https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-play-icon-png-image_956416.jpg";

export const INFO_ICON =
  "https://tsk-rlp.de/wp-content/uploads/2023/11/600px-Infobox_info_icon_white.svg.png";

export const RATING_ICON =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Star_Green.svg/250px-Star_Green.svg.png";

export const TMDB_MOVIE_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzhkNGNiOWVlNTk3ZDliMjk0ZDg1MmU3MmE4OGMxYSIsIm5iZiI6MTY3NzMyMDM1Ny41NDIsInN1YiI6IjYzZjllMGE1NmFhOGUwMDA4ZTgzNTQ5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IWJV4YZjgGc9xRDU2V0AhkJE6beuvWaQFtMcfAmG3a4",
  },
};

export const TMDB_BASE_URL = "https://api.themoviedb.org/3/";

export const TMDB_MOVIE_IMG_COMMON_URL = "https://image.tmdb.org/t/p/w1280";

export const getYouTubeEmbedUrl = (videoKey) => {
  return `https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoKey}&modestbranding=1&rel=0&showinfo=0`;
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w1280";
