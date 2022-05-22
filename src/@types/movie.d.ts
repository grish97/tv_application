declare module "@movie" {
  interface IMovieResponse {
    id: string;
    title: string;
    coverImage: string;
    titleImage: string;
    date: string;
    releaseYear: string;
    mpaRating: string;
    category: string;
    duration: string;
    description: string;
    videoUrl: Nullable<string>;
  }
}
