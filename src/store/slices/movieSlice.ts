import { createSlice } from "@reduxjs/toolkit";
import { IStoreMovie } from "@store";

const initialState: IStoreMovie = {
  selectedMovie: null,
  movies: {
    feature: [],
    trending: [],
  },
};

export const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {
    setData: (state: IStoreMovie, action) => {
      return { ...state, ...action.payload };
    },
    reset: (state: IStoreMovie) => {
      return initialState;
    },
  },
});

export const { setData, reset } = movieSlice.actions;

export default movieSlice.reducer;
