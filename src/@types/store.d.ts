declare module "@store" {
  import { IMovieResponse } from "@movie";

  interface IStoreMovie {
    selectedMovie: Nullable<IMovieResponse>;
    movies: {
      feature: IMovieResponse[];
      trending: IMovieResponse[];
    };
  }
}
