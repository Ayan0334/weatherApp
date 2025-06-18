import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./InfoBox.css";

export default function InfoBox({ info }) {
  // Image URLs
  const RAIN_URL = "https://static.vecteezy.com/system/resources/previews/005/598/719/non_2x/weather-forecast-blue-flat-design-long-shadow-glyph-icon-meteorological-observations-rain-and-air-temperature-cloud-and-thermometer-climate-features-silhouette-illustration-vector.jpg";
  const COLD_URL = "https://www.shutterstock.com/image-vector/thermometer-cold-icon-forecast-climate-600nw-1505285915.jpg";
  const HOT_URL = "https://media.istockphoto.com/id/1416887997/vector/high-temperature-icon-the-global-warming-symbol-highlighted-on-a-white-background.jpg?s=612x612&w=0&k=20&c=guDJ7-uApqOY3VtLW6-PbQ5z7Epo693kXj7_9biNCbc=";

  
  const imageUrl = info.humidity > 80 ? RAIN_URL : info.temp > 25 ? HOT_URL : COLD_URL;

  const weatherIconClass = info.humidity > 80
    ? "fas fa-bolt"          
    : info.temp > 25
      ? "fas fa-sun"          
      : "fas fa-snowflake";   

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 500, margin: "auto", borderRadius: 3 }}>
          <CardActionArea>
            
            <CardMedia
              component="img"
              image={imageUrl}
              alt="Weather condition"
              sx={{
                height: 200,
                objectFit: "contain",
                padding: "8px",
              }}
            />
            <CardContent>
             
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 1.5,
                }}
              >
                <i className={`${weatherIconClass} fa-lg`} style={{ marginRight: 8 }}></i>
                <b>{info.city}</b>
              </Typography>

            
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: "1rem" }}>
                Temperature: {info.temp}&deg;C<br />
                Humidity: {info.humidity}%<br />
                Min Temp: {info.tempMin}&deg;C<br />
                Max Temp: {info.tempMax}&deg;C<br />
                Feels like: {info.feelsLike}&deg;C<br />
                Weather can be described as <i>{info.weather}</i>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
