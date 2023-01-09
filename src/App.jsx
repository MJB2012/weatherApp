import { Search } from "./components/Search/Search"
import { CurrentWeather } from "./components/current-weather/current-weather"
import './App.css'
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api"


export function App() {
  
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}weather?lat={lat}&lon={lon}&appid=${WEATHER_API_KEY}`)
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  )
}


