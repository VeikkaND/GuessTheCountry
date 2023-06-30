import InfoBox from "./InfoBox"
import InputForm from "./InputForm"
import { useSelector } from "react-redux"

const Game = ({country, countries}) => {
    const gameOver = useSelector((state) => state.gameOver)
    const guesses = useSelector((state) => state.guesses)

    const populationStyle = {display: "none"}
    const locationStyle = {display: "none"}
    const areaStyle = {display: "none"}
    const capitalStyle = {display: "none"}
    const flagStyle = {display: "none"}

    const handleRestart = () => {
        window.location.reload(false)
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
                <InputForm countries={countries} country={country}/>
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
            <InputForm countries={countries} country={country} />
        </div>
    )
}

export default Game