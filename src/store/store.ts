import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/movieSlice";

const store = configureStore({
  reducer: {
    movie: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
