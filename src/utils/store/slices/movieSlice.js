import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  // Start with an empty object so we can dynamically add any category!
  initialState: {},
  reducers: {
    // DRY approach: Handles trending, originals, popular, sports, etc.
    addCategoryData: (state, action) => {
      const { category, results } = action.payload;
      // Dynamically assigns the array to state['originals'], state['trending'], etc.
      state[category] = results;
    },
  },
});

export const { addCategoryData } = movieSlice.actions;
export default movieSlice.reducer;
