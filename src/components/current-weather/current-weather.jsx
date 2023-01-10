import "./current-weather.css";

export function CurrentWeather({data}) {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">São Paulo</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img src="src/assets/01d.png" alt="weather" />
      </div>
      <div className="bottom">
        <p className="temp">23°C</p>
        <div className="details">
            <div className="parameter-row">
                <span className="parameter-label top">Details :</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Feels like</span>
                <span className="parameter-value">25°C</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Wind</span>
                <span className="parameter-value">10km/h</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Humidity</span>
                <span className="parameter-value">25%</span>
            </div>
            <div className="parameter-row">
                <span className="parameter-label">Pressure</span>
                <span className="parameter-value">15 hPa</span>
            </div>
        </div>
      </div>
    </div>
  );
}
