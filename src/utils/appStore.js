import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice"
import gptToogleReducer from "./gptToogleSlice"
 const appStore = configureStore(
    {
        reducer:{
            user : userReducer,
            movies : moviesReducer,
            gptToogleState: gptToogleReducer
        }
    }
 )

export default appStore;