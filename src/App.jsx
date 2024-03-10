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
            <CurrentWeather
              currentWeatherData={currentWeatherData}
            ></CurrentWeather>
          ) : (
            <div className="d-flex justify-content-center align-items-center mt-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
