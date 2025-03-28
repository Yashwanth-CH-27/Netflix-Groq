import { createSlice } from "@reduxjs/toolkit";

const gptToogleSlice = createSlice({
    name: "GptBtn",
    initialState: {
        gptState: false,
        movieNames: null,
        movieResults: null,
        btnFlag : false,
    },
    reducers:{
        addGptPage: (state) => {
            state.gptState = !state.gptState
        },
        addMovieSearchResults: (state,action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        addFlagValue: (state, action) => {
            state.btnFlag = action.payload
        }

    }
})
export const {addGptPage, addMovieSearchResults, addFlagValue} = gptToogleSlice.actions
export default gptToogleSlice.reducer;

