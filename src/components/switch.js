import React from "react";

const Switch = ({ data }) => {
  const currentWeather = {};

  switch (currentWeather) {
    case "clear sky":
      return <img src={require("../media/clear-sky.png")} />;
    case "few clouds":
      return <img src={require("../media/few-clouds.png")} />;
    case "scattered clouds":
      return <img src={require("../media/scattered-clouds.png")} />;
    case "broken clouds":
      return <img src={require("../media/broken-clouds.png")} />;
    case "shower rain":
      return <img src={require("../media/shower-rain.png")} />;
    // case "rain":
    //   return <img src={require("../media/")} />;
    // case "thunderstorm":
    //   return <img src={require("../media/")} />;
    // case "snow":
    //   return <img src={require("../media/")} />;
    // case "mist":
    //   return <img src={require("../media/")} />;
  }

  return <div>switch</div>;
};

export default Switch;
