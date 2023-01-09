import "./current-weather.css";

export function CurrentWeather() {
  return (
    <div className="weather">
      <div className="top">
        <p className="city">São Paulo</p>
        <p className="weather-description">Sunny</p>
      </div>
      <img src="src/assets/01d.png" alt="weather" />
    </div>
  );
}
