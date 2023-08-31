import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <div className="current-weather">
      <p className="city-name">City Name</p>
      <p className="weather-conditions">Weather Conditions</p>
      <img alt="weather icon" className="weather-icon" />
      <p className="temp">temperature</p>
    </div>
  );
};

export default CurrentWeather;
