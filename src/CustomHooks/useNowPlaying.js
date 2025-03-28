import { useEffect } from "react"
import { apiOptions } from "../utils/nowPlayingTMDB"
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

export const useNowPlaying = () => {
    const nowPlayingMovies  = useSelector(store => store.movies.nowPlaying)
    const dispatch = useDispatch()
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', apiOptions);
        const jsonData = await data.json()
        console.log(jsonData.results)
        dispatch(addNowPlayingMovies(jsonData.results))
    }
    useEffect( () => {
        !nowPlayingMovies && getNowPlayingMovies()
    }, [] )
};