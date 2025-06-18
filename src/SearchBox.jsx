import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "3e7f6b4911c59a4e31b8f936bff7d014";


  const getWeatherInfo = async () => {
    try {
      const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      const jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        setError("City not found. Please enter a valid city.");
        return null;
      }

      const result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      setError(""); // clear previous error
      return result;
    } catch (err) {
      setError("Something went wrong. Please check your internet.");
      return null;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
    setError(""); // reset error while typing
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    const newInfo = await getWeatherInfo();
    if (newInfo) {
      updateInfo(newInfo);
      setCity(""); // clear input
    }
  };

  return (
    <div className="SearchBox">
      {error && (
        <Alert severity="error" sx={{ marginBottom: 2 }}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
