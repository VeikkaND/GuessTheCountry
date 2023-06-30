import { configureStore } from "@reduxjs/toolkit"
import gameOverReducer from "../reducers/gameOverReducer"
import guessesReducer from "../reducers/guessesReducer"

export const store = configureStore({
    reducer: {
        gameOver: gameOverReducer,
        guesses: guessesReducer
    }
})