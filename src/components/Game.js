import { useState } from "react"
import InfoBox from "./InfoBox"

const Game = ({country, countries}) => {
    console.log(country.name.common)
    const [getGuesses, setGuesses] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [guess, setGuess] = useState("")
    const [matchingCountries, setMatchingCountries] = useState([])

    const guesses = getGuesses
    const correctAnswer = country.name.common.toLowerCase()

    const populationStyle = {display: "none"}
    const locationStyle = {display: "none"}
    const areaStyle = {display: "none"}
    const capitalStyle = {display: "none"}
    const flagStyle = {display: "none"}
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if(guess.toLowerCase() === correctAnswer) {
            setGameOver(true)
        } else {
            setGuesses(guesses + 1)
            setGuess("")
        }
    }

    const handleRestart = () => {
        window.location.reload(false)
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

    const InputForm = () => {
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

    const GameOverInfo = () => {
        return (
            <div>
                <div className="clues">
                    <InfoBox infoType={"Population"} 
                        info={country.population}/>
                    <InfoBox infoType={"Location"}
                        info={country.continents}/>
                    <InfoBox infoType={"Area"} 
                        info={country.area}/>
                    <InfoBox infoType={"Capital"} 
                        info={country.capital[0]}/>
                    <InfoBox infoType={"flag"} 
                        info={country.flags.png}/>
                </div>
                <InputForm />
            </div>
        )
    }

    const RestartButton = () => {
        return (<button onClick={handleRestart}>PLAY AGAIN</button>)
    }

    if(!gameOver) {
        switch(guesses) {
            case 0:
                populationStyle.display = "block"
                break;
            case 1:
                populationStyle.display = "block";
                locationStyle.display = "block";
                break;
            case 2:
                populationStyle.display = "block";
                locationStyle.display = "block";
                areaStyle.display = "block";
                break;
            case 3:
                populationStyle.display = "block";
                locationStyle.display = "block";
                areaStyle.display = "block";
                capitalStyle.display = "block";
                break;
            case 4:
                populationStyle.display = "block";
                locationStyle.display = "block";
                areaStyle.display = "block";
                capitalStyle.display = "block";
                flagStyle.display = "block"
                break;
            default:
                setGameOver(true)
                populationStyle.display = "block";
                locationStyle.display = "block";
                areaStyle.display = "block";
                capitalStyle.display = "block";
                flagStyle.display = "block"
        }
    }
    
    if(gameOver) {
        if(guesses < 5) {
            return (
                <div className="game">
                    <GameOverInfo />
                    <h3>Correct answer</h3>
                    <h4>The country was {country.name.common}</h4>
                    <RestartButton />
                </div>
            )
        }
        return (
            <div className="game">
                <GameOverInfo />
                <h3>Game Over</h3>
                <h4>The correct country was {country.name.common}</h4>
                <RestartButton />
            </div>
        )
    }
    return (
        <div className="game">
            
            <div className="clues">
                <InfoBox infoType={"Population"} 
                    info={country.population} style={populationStyle}/>
                <InfoBox infoType={"Location"}
                    info={country.continents} style={locationStyle}/>
                <InfoBox infoType={"Area"} 
                    info={country.area} style={areaStyle}/>
                <InfoBox infoType={"Capital"} 
                    info={country.capital[0]} style={capitalStyle}/>
                <InfoBox infoType={"flag"} 
                    info={country.flags.png} style={flagStyle}/>
            </div>
            <InputForm />
        </div>
    )
}

export default Game