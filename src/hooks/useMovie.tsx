import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "store/slices/movieSlice";

import { RootState } from "store/store";
import { IStoreMovie } from "@store";
import { IMovieResponse } from "@movie";

export const LAST_SELECTED_MOVIE_ID = "LAST_SELECTED_MOVIE_ID";

/**
 * Hook give a methods for work movie store
 */
export default function useMovie() {
  const dispatch = useDispatch();
  const { selectedMovie, movies } = useSelector<RootState, IStoreMovie>(
    (store) => store.movie
  );

  /**
   * Load movies from static file
   * and set store
   */
  async function loadMovies(): Promise<void> {
    try {
      const movieData = await import("static/movies.json");

      updateState({
        movies: {
          feature: [movieData.featured],
          trending: sortMovies(
            JSON.parse(JSON.stringify(movieData.tendingNow))
          ),
        },
      });
    } catch (err) {
      console.log("Something went wrong", err);
    }
  }

  /**
   * Set selected movie to store
   * if movie id not found set default feature movie
   * @param {string} id
   */
  async function setSelected(id: Nullable<string>) {
    let selectedMovie = null;

    if (id) {
      selectedMovie = movies.trending.find((movie) => movie.id === id);
      sessionStorage.setItem(LAST_SELECTED_MOVIE_ID, id);
    } else {
      selectedMovie = movies.feature[0] || null;
    }

    updateState({ selectedMovie });
  }

  /**
   * Sort movies list by creation date
   * if has last seen movie, move that to start of list
   */
  function sortMovies(moviesList?: IMovieResponse[]): IMovieResponse[] {
    const list = moviesList || movies.trending;
    const lastSeenMovieId = sessionStorage.getItem(LAST_SELECTED_MOVIE_ID);

    list.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    if (lastSeenMovieId) {
      const index = list.findIndex((el) => el.id === lastSeenMovieId);

      if (index !== -1) {
        list[0] = list[index];
        list.splice(index, 1);
      }
    }

    return list;
  }

  function updateState(payload: Partial<IStoreMovie>) {
    dispatch(setData(payload));
  }

  return { loadMovies, setSelected, sortMovies, updateState };
}
