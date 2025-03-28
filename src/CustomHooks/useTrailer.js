import { useEffect } from "react";
import { apiOptions } from "../utils/nowPlayingTMDB";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useTrailer = (movieID) => {
    const dispatch = useDispatch();
    const movieTrailer  = useSelector(store => store.movies.trailer)
  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieID +
        "/videos?language=en-US",
      apiOptions
    );
    const jsonData = await data.json();
    const listOfData = jsonData.results;
    const filterData = listOfData.filter((video) => video.type == "Trailer");
    const trailer = filterData ? filterData[0] : listOfData[0];
    dispatch(addTrailerVideo(trailer));

  };
  useEffect(() => {
   !movieTrailer && getTrailer();
  }, []);
};

export default useTrailer;
