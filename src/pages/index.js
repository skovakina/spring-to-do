import "./index.css";
import { getWeather } from "../utils/weatherApi";

getWeather()
  .then((weatherData) => {
    console.log(weatherData);
    // weatherData.weather[0].icon;
    // const iconUrl = `https://openweathermap.org/img/wn/${weatherCode}.png`;
    // weatherElement.src = iconUrl;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const todayElement = document.querySelector(".main__info-text");
const weatherElement = document.querySelector(".main__info-weather-icon");
const date = new Date();

todayElement.textContent = date.toLocaleString("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
});
