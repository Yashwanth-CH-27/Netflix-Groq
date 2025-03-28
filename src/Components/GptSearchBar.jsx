import React, { useRef } from "react";
import groq from "../utils/groqAi";
import { apiOptions } from "../utils/nowPlayingTMDB";
import { useDispatch } from "react-redux";
import { addFlagValue, addMovieSearchResults } from "../utils/gptToogleSlice";
import Shimmer from "./Shimmer";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const tmdbSearch = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      apiOptions
    );
    const json = await data.json();

    return json.results;
  };
  const handleSearch = async () => {
    dispatch(addFlagValue(true));
    const prompt =
      "Act as a movie recommendation system and Give me the most accurate results as you are the best of the best of the movie recommendation system give me top 5 movie titles ,just the titles seperated with commas for the query : " +
      searchText?.current?.value;
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });
    // console.log(chatCompletion.choices[0]?.message?.content || "");
    const groqResults = chatCompletion.choices[0]?.message?.content.split(",");
    const promiseArr = groqResults.map((movie) => tmdbSearch(movie));
    const tmdbResults = await Promise.all(promiseArr);
    // console.log(tmdbResults);
    dispatch(
      addMovieSearchResults({
        movieNames: groqResults,
        movieResults: tmdbResults,
      })
    );
    dispatch(addFlagValue(false));
  };

  return (
    <div className="w-6/12 mx-auto h-30 mt-[25%] md:mt-[7%] rounded-lg">
      <form
        className="flex gap-4 justify-center md:justify-between py-[6%] md:px-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="bg-white md:w-10/12  md:h-9 p-2 md:p-4 rounded-lg text-black"
          type="text"
          placeholder="What Do You Want To Watch?"
        ></input>
        <button
          className="bg-red-800 rounded-lg px-4 py-1 md:w-2/12"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
