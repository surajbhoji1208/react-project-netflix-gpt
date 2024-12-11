import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        gptSearchMovies:null,
        movieResult:null
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch
        },
        addGptSearchMovies:(state,action)=>{
            const {movieNames,movieResult} = action.payload
            state.gptSearchMovies = movieNames
            state.movieResult =movieResult
        }
    }
})

export const {toggleGptSearchView,addGptSearchMovies} = gptSlice.actions

export default gptSlice.reducer