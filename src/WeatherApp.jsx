import SearchBox from "./SearchBox.jsx";
import { useState } from "react";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Kolkata",
    feelsLike: 23.33,
    humidity: 33.33,
    temp: 27.27,
    tempMax: 27.27,
    tempMin: 27.27,
    weather: "overcast clouds",
  });

  const updateInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Get Weather Details</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
