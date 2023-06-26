import axios from "axios"

const fields = "name,capital,area,population,flags"
const baseUrl = `https://restcountries.com/v3.1/all?fields=${fields}`

export const getAllCountries = async () => {
    const response = await axios.get(baseUrl)
    console.log("fetching api")
    return response.data
}