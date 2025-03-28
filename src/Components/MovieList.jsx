import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-2 md:px-10 h-full md:h-auto">
      <h1 className="m-1 md:m-3 text-[10px] md:text-xl font-bold">{title}</h1>
      <div className="overflow-x-scroll scrollbar-hide">
        <div className="mx-5">
          <MovieCards moviesArr={movies} />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
