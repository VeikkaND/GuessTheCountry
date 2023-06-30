import { createSlice } from "@reduxjs/toolkit";

export const guessesSlice = createSlice({
    name: "guesses",
    initialState: 0,
    reducers: {
        incrementGuesses: (state) => {
            return state + 1
        }
    }
})

export const {incrementGuesses} = guessesSlice.actions
export default guessesSlice.reducer