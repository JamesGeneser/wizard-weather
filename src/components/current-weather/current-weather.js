import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div>
      <img
        src={require("../../media/Crystal-ball.png")}
        className="crystal-ball"
      />

      <img src={require("../../media/Sunny.png")} className="sunny"></img>

      <div className="current-weather">
        <p className="city-name">{data.city}</p>
        <p className="weather-conditions">{data.weather[0].description}</p>
        <img alt="weather icon" className="weather-icon" />
        <p className="temp">temperature</p>
      </div>
    </div>
  );
};

export default CurrentWeather;
