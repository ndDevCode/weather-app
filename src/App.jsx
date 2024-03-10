import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CurrentWeather from "./components/CurrentWeather";

function App() {
  const [currentWeatherData, setCurrentWeatherData] = useState();

  const getWeatherData = (data) => {
    setCurrentWeatherData(data);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <Navbar getWeatherData={getWeatherData}></Navbar>
        </div>
        <div className="row">
          {currentWeatherData ? (
            <CurrentWeather props={currentWeatherData}></CurrentWeather>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
