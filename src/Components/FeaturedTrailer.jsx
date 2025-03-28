import React from "react";
import useTrailer from "../CustomHooks/useTrailer";
import { useSelector } from "react-redux";

const FeaturedTrailer = ({ movieID }) => {
  const trailerKey = useSelector((store) => store?.movies?.trailer?.key);
  useTrailer(movieID);
  return (
    <div>
      <iframe
        className="w-screen aspect-video -mt-[32px] md:mt-[-112px] pointer-events-none"
        src={"https://www.youtube.com/embed/"+trailerKey+"?si=S_vc1X5j2VX5e3nW&autoplay=1&mute=1&loop=1&playlist="+trailerKey+"&controls=0&modestbranding=1&rel=0&showinfo=0"}
        title="YouTube video player"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default FeaturedTrailer;
