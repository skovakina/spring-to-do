import "./index.css";
import { getWeather } from "../utils/weatherApi";

getWeather()
  .then((weatherData) => {
    console.log(weatherData);
    // Do something with the UI
  })
  .catch((error) => {
    console.error("Error:", error);
  });
