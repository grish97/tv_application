import { IMovieResponse } from "@movie";
import { useState } from "react";
import { ReactNode, useEffect } from "react";
import MovieDescription from "../MovieDescription/MovieDescription";
import "./Background.scss";

interface IPropType {
  src: string;
  type: "image" | "video";
  selectedMovie: Nullable<IMovieResponse>;
}

function Background(props: IPropType) {
  const { selectedMovie } = props;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    if (selectedMovie?.videoUrl) {
      setTimeout(() => setIsLoading(false), 2000);
    } else {
      setIsLoading(false);
    }
  }, [selectedMovie]);

  function renderMedia() {
    return selectedMovie?.videoUrl ? (
      <video
        id="movie-trailer"
        src={selectedMovie.videoUrl}
        autoPlay
        loop
        playsInline
        muted
      />
    ) : (
      selectedMovie?.coverImage && (
        <img
          className="cover-image"
          src={require(`assets/images/${selectedMovie.coverImage}`)}
          alt=""
        />
      )
    );
  }

  return (
    <div className={`background ${isLoading ? "default-image" : ""}`}>
      {!isLoading && renderMedia()}

      <MovieDescription selectedMovie={props.selectedMovie} />
    </div>
  );
}

export default Background;
