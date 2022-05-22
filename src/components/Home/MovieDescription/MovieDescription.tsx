import { IMovieResponse } from "@movie";
import { IStoreMovie } from "@store";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import FeaturedTitleImage from "asstes/images/FeaturedTitleImage.png";
import "./MovieDescription.scss";

interface IPropType {
  selectedMovie: Nullable<IMovieResponse>;
}

function MovieDescription(props: IPropType) {
  const { selectedMovie } = props;

  function secondsToTimesString(seconds: string): string {
    const value: number = Number(seconds);

    const hours = Math.floor(value / 3600);
    const minute = Math.floor(value / 60);
    const second = value % 60;

    const list: string[] = [];
    if (0 != hours) {
      list.push(`${hours} h`);
    }

    if (0 != minute) {
      list.push(`${minute} m`);
    }

    if (list.length == 0) {
      list.push(`${second}}`);
    }

    return list.join(" ");
  }

  return (
    <div className="movie-description">
      <div className="category">{selectedMovie?.category}</div>
      <div className="image-title">
        {/** This image used default for all movies, it can be replace */}
        <img src={FeaturedTitleImage} alt="Movie title" />
      </div>

      <div className="additional-info">
        <span className="year">{selectedMovie?.releaseYear}</span>
        <span className="mpa-rating">{selectedMovie?.mpaRating}</span>
        <span className="duration">
          {secondsToTimesString(selectedMovie?.duration || "")}
        </span>
      </div>

      <div className="description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
        {/**selectedMovie?.description*/}
      </div>

      <div className="actions">
        <button type="submit" className="play-btn">
          <span className="icon" />
          <span>Play</span>
        </button>

        <button type="submit" className="more-btn">
          More Info
        </button>
      </div>
    </div>
  );
}

export default MovieDescription;
