import React from "react";
import Header from "./Header";
import { useNowPlaying } from "../CustomHooks/useNowPlaying";
import FeaturedMovieComponent from "./FeaturedMovieComponent";
import Shimmer from "./Shimmer";
import AllMovies from "./AllMovies";
import { usePopular } from "../CustomHooks/usePopular";
import { useTopRated } from "../CustomHooks/useTopRated";
import { useUpcoming } from "../CustomHooks/useUpcoming";
import { useSelector } from "react-redux";
import GptPage from "./GptPage";

const Browse = () => {
  const gptToogle = useSelector((store) => store?.gptToogleState?.gptState);
  useNowPlaying();
  usePopular();
  useTopRated();
  useUpcoming();
  return (
    <div className="flex">
      <Header />
      {gptToogle ? (
        <GptPage />
      ) : (
        <>
          <FeaturedMovieComponent />
          <AllMovies />
        </>
      )}
    </div>
  );
};

export default Browse;
