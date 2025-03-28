import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const AllMovies = () => {
    const allMovies = useSelector((store) => store?.movies)
    // if(nowPlayingMovies) return
    // console.log(allMovies.nowPlaying)
  return (
    <div className="text-white absolute z-50 mt-[33%] md:mt-[38%] w-[100%] pb-10 h-auto">
        <MovieList title={"Now Playing"} movies={allMovies.nowPlaying}/>
        <MovieList title={"Top Rated"} movies={allMovies.topRated}/>
        <MovieList title={"Popular"} movies={allMovies.popular}/>
        <MovieList title={"Upcoming"} movies={allMovies.upcoming}/>

    </div>
  )
}

export default AllMovies