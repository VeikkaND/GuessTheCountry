import { createSlice } from "@reduxjs/toolkit";

export const gameOverSlice = createSlice({
    name: "gameOver",
    initialState: false,
    reducers: {
        setGameOver: (state) => {
            return true
        }
    }
})

export const {setGameOver} = gameOverSlice.actions
export default gameOverSlice.reducer