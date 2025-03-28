import { useEffect } from "react"
import { apiOptions } from "../utils/nowPlayingTMDB"
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

export const useUpcoming = () => {
    const dispatch = useDispatch();
    const upcomingMovies  = useSelector(store => store.movies.upcoming)
    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', apiOptions)
        const jsonData = await data.json()
        console.log(jsonData.results)
        dispatch(addUpcomingMovies(jsonData.results))
    }
    useEffect( () => {
      !upcomingMovies && getUpcomingMovies()
    }, [] )
};