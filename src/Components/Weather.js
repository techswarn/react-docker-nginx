import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Weather() {
  const [weather, setWeather] = useState(null);
  const [load, setLoad] = useState(true);
  const getWeather = async () => {
    const data = await axios.get(
      "http://139.59.49.153:80/kaniko/api/v1/weather"
    );
    if (data) {
      setLoad(false);
    }

    setWeather(Math.floor(data.data.data));
  };
  useEffect(() => {
    getWeather();
  }, []);
  console.log(weather);
  return (
    <div className="container">
      <div className="card">
        <h2>
          {load ? (
            <h2>Let me find it!</h2>
          ) : (
            <h4>Weather in Mangalore: {weather}c</h4>
          )}
        </h2>
      </div>
    </div>
  );
}
