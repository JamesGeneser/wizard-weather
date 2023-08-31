import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { WEATHER_API_URL } from "./api";
import { WEATHER_API_KEY } from "./api";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    const [lat, lon] = searchData.value.split(" ");

    const currentWeahterFetch = fetch(
      `${WEATHER_API_URL}/weather?lat={lat}&lon={lon}&appid=${WEATHER_API_KEY}`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}$appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeahterFetch, forecastFetch]).then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather(weatherResponse);

      setForecast(forecastResponse);
    });
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
