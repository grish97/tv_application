import { IMovieResponse } from "@movie";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useMovie } from "hooks";
import "./Trending.scss";

interface IPropType {
  trendingMovies: IMovieResponse[];
}

function Trending(props: IPropType) {
  const { setSelected } = useMovie();
  const { trendingMovies } = props;

  function updateSelected(id: string) {
    setSelected(id);
  }

  return (
    <div className="trending-now">
      <div className="title">Trending Now</div>

      <Splide
        className="movie-carousel"
        options={{
          perPage: 8,
          arrows: false,
          pagination: false,
          useScroll: true,
          gap: "16px",
          wheel: true,
        }}
      >
        {trendingMovies.map((movie) => (
          <SplideSlide key={movie.id}>
            <div
              className="movie-preview"
              onClick={() => updateSelected(movie.id)}
            >
              <img
                src={require(`asstes/images/${movie.coverImage}`)}
                alt={movie.title}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Trending;
