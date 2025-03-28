import { useSelector } from "react-redux";
import FeaturedTrailer from "./FeaturedTrailer"
import VideoTitle from "./VideoTitle"


const FeaturedMovieComponent = () => {
    const featuredMovie = useSelector((store) => store.movies?.nowPlaying)
    if(!featuredMovie) return;
    const {title, overview, id} = featuredMovie[0];
  return (
    <div className="text-white">
        <VideoTitle title={title} overview={overview}/>
        <FeaturedTrailer movieID={id}/>
    </div>
  )
}

export default FeaturedMovieComponent