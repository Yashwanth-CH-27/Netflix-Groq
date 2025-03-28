import React from "react";
import { poster_logo } from "../utils/constants";

const MovieCards = ({ moviesArr }) => {
  return (
    moviesArr && (
      <div className="w-[300%]">
        <div className="flex gap-1 md:gap-3">
          {moviesArr.map((movie) => (
            <div className="w-100" key={movie.id}>
              {movie.poster_path ? <img className="rounded-lg w-full md:w-auto h-full" src={poster_logo + movie?.poster_path} alt="" /> : null}
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default MovieCards;
