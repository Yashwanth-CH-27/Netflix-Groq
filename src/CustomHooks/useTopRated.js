import { useEffect } from "react"
import { apiOptions } from "../utils/nowPlayingTMDB"
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

export const useTopRated = () => {
    const topRatedMovies  = useSelector(store => store.movies.topRated)
    const dispatch = useDispatch()
    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', apiOptions)
        const jsonData = await data.json()
        console.log(jsonData.results)
        dispatch(addTopRatedMovies(jsonData.results))
    }
    useEffect( () => {
       !topRatedMovies && getTopRatedMovies()
    }, [] )
};