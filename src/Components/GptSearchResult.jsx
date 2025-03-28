import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";

const GptSearchResult = () => {
  const { movieNames, movieResults, btnFlag } = useSelector(
    (store) => store.gptToogleState
  );
  if(btnFlag == true) return <Shimmer/>
  if(!movieNames) return null
  console.log(movieResults)
  return (
    <div className="">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptSearchResult;
