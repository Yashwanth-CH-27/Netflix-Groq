import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const AllMovies = () => {
    const allMovies = useSelector((store) => store?.movies)
    // if(nowPlayingMovies) return
    // console.log(allMovies.nowPlaying)
  return (
    <div className="text-white absolute z-50 mt-[35%] md:mt-[38%] w-[100%] pb-10">
        <MovieList title={"Now Playing"} movies={allMovies.nowPlaying}/>
        <MovieList title={"Top Rated"} movies={allMovies.topRated}/>
        <MovieList title={"Popular"} movies={allMovies.popular}/>
        <MovieList title={"Upcoming"} movies={allMovies.upcoming}/>
        <MovieList title={"In Theater's"} movies={allMovies.nowPlaying}/>
        <MovieList title={"All Time Hits"} movies={allMovies.topRated}/>
        <MovieList title={"Popular Movies"} movies={allMovies.popular}/>
        <MovieList title={"Upcoming Movies"} movies={allMovies.upcoming}/>
      </div>
  )
}

export default AllMovies