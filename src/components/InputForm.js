import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { setGameOver } from "../reducers/gameOverReducer"
import { incrementGuesses } from "../reducers/guessesReducer"

const InputForm = ({ countries, country }) => {
    const [guess, setGuess] = useState("")
    const [matchingCountries, setMatchingCountries] = useState([])
    const gameOver = useSelector((state) => state.gameOver)
    const guesses = useSelector((state) => state.guesses)
    const dispatch = useDispatch()
    
    const correctAnswer = country.name.common.toLowerCase()

    const handleSubmit = (event) => {
        event.preventDefault()
        if(guess.toLowerCase() === correctAnswer) {
            dispatch(setGameOver())
        } else if (guesses >= 4) {
            dispatch(incrementGuesses())
            setGuess("")
            dispatch(setGameOver())
        } else {
            dispatch(incrementGuesses())
            setGuess("")
        }
    }

    const handleChange = (event) => {
        event.preventDefault()
        if(!gameOver) {
            setGuess(event.target.value)
            setMatchingCountries(countries
                .filter(country => country.toLowerCase()
                    .includes(event.target.value.toLowerCase())))
        }
    }

    const handleSelect = (event) => {
        const country = event.target.innerText
        setGuess(country)
        setMatchingCountries(countries
            .filter(c => c.toLowerCase()
                .includes(country.toLowerCase())))
    }

    if(guess !== "" && guess !== matchingCountries[0]) {
        return (
            <form onSubmit={handleSubmit}>
                <input autoFocus onChange={handleChange} 
                    value={guess}>
                </input>
                <div className="suggestions">
                    {matchingCountries.map(country => 
                        <p key={country} id="suggestion" 
                            onClick={handleSelect}>
                                {country}
                        </p>)}
                </div>
            </form>
        )
    }
    return (
        <form onSubmit={handleSubmit}>
            <input autoFocus onChange={handleChange} value={guess}></input>
        </form>
    )
}

export default InputForm