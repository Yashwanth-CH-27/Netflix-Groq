import { useEffect } from "react"
import { apiOptions } from "../utils/nowPlayingTMDB"
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

export const usePopular = () => {
    const popularMovies  = useSelector(store => store.movies.popular)
    const dispatch = useDispatch()
    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', apiOptions)
        const jsonData = await data.json()
        console.log(jsonData.results)
        dispatch(addPopularMovies(jsonData.results))
    }
    useEffect( () => {
        !popularMovies && getPopularMovies()
    }, [] )
};