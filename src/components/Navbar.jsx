import React, { useEffect } from "react";
import Axios from "axios";
import { API_KEY } from "../constants/api.mjs";

function Navbar(props) {
  useEffect(() => {
    Axios.get("https://geolocation-db.com/json/")
      .then((res) => {
        getDataFromApi(res.data.city);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getCurrentWeather = (event) => {
    event.preventDefault();
    getDataFromApi(event.target[0].value);
  };

  const getDataFromApi = (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;
    Axios.get(url)
      .then((res) => {
        props.getWeatherData(res.data);
      })
      .catch((error) => {
        console.log(error);
        props.getWeatherData(error);
      });
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-dark rounded-bottom-4"
      aria-label="Eleventh navbar example"
    >
      <div className="container-fluid">
        <a className="navbar-brand fw-semibold text-white" href="#">
          Weather App
        </a>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample09"
          aria-controls="navbarsExample09"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <form role="search" onSubmit={getCurrentWeather} className="ms-auto">
            <input
              id="txt-search-city"
              className="form-control mt-md-1 mt-sm-1 mt-1"
              type="search"
              placeholder="Search by City"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
