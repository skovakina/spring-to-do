import "./index.css";
import { getWeather } from "../utils/weatherApi";

const tempElement = document.querySelector(".main__weather-text");
const weatherElement = document.querySelector(".main__info-weather-icon");

const weatherIcons = {
  "01": require("../images/sun.svg"),
  "02": require("../images/cloud.svg"),
  "03": require("../images/cloud.svg"),
  "04": require("../images/cloud.svg"),
  "09": require("../images/cloud-drizzle.svg"),
  10: require("../images/cloud-rain.svg"),
  11: require("../images/cloud-lightning.svg"),
  13: require("../images/cloud-snow.svg"),
  50: require("../images/cloud.svg"),
};

getWeather()
  .then((weatherData) => {
    tempElement.textContent = `${Math.round(weatherData.main.temp)}°F`;
    const weatherCode = weatherData.weather[0].icon.slice(0, 2);
    const iconUrl = weatherIcons[weatherCode];
    weatherElement.src = iconUrl;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const todayElement = document.querySelector(".main__info-text");

const date = new Date();

todayElement.textContent = date.toLocaleString("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
});
