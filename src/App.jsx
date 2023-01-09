import { Search } from "./components/Search/Search"
import { CurrentWeather } from "./components/current-weather/current-weather"
import './App.css'


export function App() {
  
  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  )
}


