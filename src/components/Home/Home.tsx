import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMovie, LAST_SELECTED_MOVIE_ID } from "hooks";
import Background from "./Background/Background";
import Trending from "./Trending/Trending";
import { Loading } from "components/common";

import { RootState } from "store/store";
import { IStoreMovie } from "@store";
import { useState } from "react";

import "./Home.scss";

interface IPropType {}

function Home(props: IPropType) {
  const [isLoading, setIsLoading] = useState(true);
  const { loadMovies, setSelected, sortMovies } = useMovie();
  const movieStore = useSelector<RootState, IStoreMovie>(
    (store) => store.movie
  );

  /** Load movies data and store */
  useEffect(() => {
    loadMovies();
  }, []);

  /** Set selected movie after updating movies data  */
  useEffect(() => {
    const movieSessionId = sessionStorage.getItem(LAST_SELECTED_MOVIE_ID);

    setSelected(movieSessionId);
  }, [movieStore.movies]);

  useEffect(() => {
    setIsLoading(false);
  }, [movieStore.selectedMovie]);

  return (
    <div className="home-content">
      {!isLoading ? (
        <Fragment>
          <Background
            src=""
            type="image"
            selectedMovie={movieStore.selectedMovie}
          />
          <Trending trendingMovies={movieStore.movies.trending} />
        </Fragment>
      ) : (
        <div className="loading-time">
          <Loading />
        </div>
      )}
    </div>
  );
}

export default Home;
