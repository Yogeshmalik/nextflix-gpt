import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    allMovies: [],
  },
  reducers: {
    addAllMovies: () => {},
  },
});

export const { addAllMovies } = movieSlice.actions;
export default movieSlice.reducer;
