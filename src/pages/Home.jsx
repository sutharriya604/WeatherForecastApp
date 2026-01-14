import React, { useEffect, useState } from "react";
import Search from "../Components/Search";
import Day from "../Components/Day";

const Home = () => {
  const [data, setData] = useState(null);
  const [day, setDay] = useState(null);

  const desc = {
    "clear sky": "☀️",
    "few clouds": "🌤️",
    "scattered clouds": "☁️",
    "broken clouds": "☁️",
    "light rain": "🌦️",
    "rain": "🌧️",
    "thunderstorm": "⛈️",
    "snow": "☃️",
    "mist": "😶‍🌫️",
  };

  const get = (d) => {
    setDay(d);
  };
  const getData = (get) => {
    if (!get.error) {
      setData(get);
      setDay(get.forecast[0]);
    }
  };
 
  return (
    <div class="body">
      <div class="app">
        <h1 style={{ margin: "30px 0px 20px 0px " }}>🌍 Weather Forecast</h1>
        <Search result={getData} />
        <div>
          {data ? (
            <>
              <div class="weather-card" style={{ display: "flex" }}>
                <div
                  class="date"
                  style={{ marginLeft: "0px", marginRight: "30px" }}
                >
                  <h2
                    style={{
                      margin: "0px 30px 0px 0px",
                      padding: "0px",
                      width: "",
                      fontWeight: "bold",
                    }}
                  >
                    {data?.city}, {data.country}
                  </h2>
                  <h3
                    style={{ margin: "0px", paddingRight: "53px" }}
                    class="date"
                  >
                    {day?.date}, {day?.day_sort}
                  </h3>
                  
                  
                  
                </div>
                <div class="weather">
                  <div
                    class="weather-icon"
                  >
                    {desc[day.description] || (
                      <img
                        src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                        alt={""}
                      />
                    )}
                   
                  </div>
                  <div class="desc">
                     <h3 class="deg" >
                    {((day?.min_temp + day?.max_temp) / 2).toFixed()}°
                  </h3>
                  <h3 style={{fontSize:"25px", padding:"0px"}}>
                    {String(day?.description).charAt(0).toUpperCase() +
                      String(day?.description).slice(1)}
                  </h3>
                  </div>
                  
                </div>
                <div class="details">
                  <div class="box">
                    💨
                    <h3>Wind</h3>
                    <p>{day?.wind_speed}</p>
                  </div>

                  <div class="box">
                    💧
                    <h3>Humidity</h3>
                    <p>{day?.humidity}</p>
                  </div>

                  <div class="box">
                    🌡️
                    <h3>Max Temperature</h3>
                    <p>{day?.max_temp}</p>
                  </div>
                  <div class="box">
                    🌡️
                    <h3>Min Temperature</h3>
                    <p>{day?.min_temp}</p>
                  </div>
                </div>
                
              </div>
              <div class="days">
                {data?.forecast?.map((day, idx) => (
                  <Day day={day} key={idx} put={get} />
                ))}
              </div>
            </>
          ) : (
            <h1>no data</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
