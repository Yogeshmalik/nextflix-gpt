import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import movieReducer from "./slices/movieSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      movies: movieReducer,
    },
  });
};
