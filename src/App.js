import Game from "./components/Game";
import { getAllCountries } from "./services/countries"
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

function App () {
  const [getCountries, setCountries] = useState([])
  const [countriesNames, setCountriesNames] = useState([])

  useEffect(() => {
    async function getCountries() {
      const countries = await getAllCountries()
      setCountries(countries)
      setCountriesNames(countries.map(country => country.name.common))
    }
    getCountries()
  }, [])

  if(getCountries.length !== 0) {
    const country = getCountries[Math.floor(Math.random() * getCountries.length)]
    return (
      <div>
        <NavBar />
        <Game country={country} countries={countriesNames}/>
      </div>
    )
  }
  return (
    <div>
      <NavBar />
      Loading country data...
    </div>
  )
}

export default App;
