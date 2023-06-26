import { useState } from "react"
import InfoBox from "./InfoBox"

const Game = ({country}) => {
    console.log(country)
    const [getGuesses, setGuesses] = useState(0)

    const guesses = getGuesses

    const populationStyle = {display: "none"}
    const areaStyle = {display: "none"}
    const capitalStyle = {display: "none"}
    const flagStyle = {display: "none"}
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setGuesses(guesses + 1)
    }
    switch(guesses) {
        case 0:
            populationStyle.display = "block"
            break;
        case 1:
            populationStyle.display = "block";
            areaStyle.display = "block"
            break;
        case 2:
            populationStyle.display = "block";
            areaStyle.display = "block";
            capitalStyle.display = "block";
            break;
        default:
            populationStyle.display = "block";
            areaStyle.display = "block";
            capitalStyle.display = "block";
            flagStyle.display = "block"
            break;
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input></input>
            </form>
            <div className="clues">
                <InfoBox infoType={"Population"} 
                    info={country.population} style={populationStyle}/>
                <InfoBox infoType={"Area"} 
                    info={country.area} style={areaStyle}/>
                <InfoBox infoType={"Capital"} 
                    info={country.capital[0]} style={capitalStyle}/>
                <InfoBox infoType={"flag"} 
                    info={country.flags.alt} style={flagStyle}/>
            </div>
        </div>
    )
}

export default Game