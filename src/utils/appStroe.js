import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import gtpReducer from "./gptSlice";

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gptSearch: gtpReducer
    }
})

export default appStore;