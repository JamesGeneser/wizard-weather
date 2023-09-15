import { useState } from "react";
import { useEffect } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Header from "./components/header";
import { WEATHER_API_URL } from "./api";
import { WEATHER_API_KEY } from "./api";
import { Container } from "react-bootstrap";

import CrystalBall from "./components/crystal-ball";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);

  return (
    <Container fluid className="main-container">
      <Header />

      <Search onSearchChange={handleOnSearchChange} />
      {!currentWeather && <CrystalBall />}

      {currentWeather && <CurrentWeather data={currentWeather} />}
    </Container>
  );
}

// }

export default App;
