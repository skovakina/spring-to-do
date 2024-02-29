import "./index.css";
import data from "../utils/data.js";
import { getWeather } from "../utils/weatherApi";

// show the weather and temp
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

// show today
const todayElement = document.querySelector(".main__info-text");
const date = new Date();

todayElement.textContent = date.toLocaleString("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
});

// add new list
const btnNewList = document.querySelector(".nav__button");
const formDefault = document.querySelector(".form_default");
const formContainer = document.querySelector(".forms__container");
btnNewList.addEventListener("click", () => {
  const newForm = formDefault.cloneNode(true);
  formContainer.appendChild(newForm);
  const btnFormDelete = document.querySelector(".form__delete-button");
});

// delete new list

console.log(btnFormDelete);

const handleDelete = () => {
  btnFormDelete.addEventListener("click", (e) => {
    const form = e.target.closest(".form");
    form.remove();
  });
};
