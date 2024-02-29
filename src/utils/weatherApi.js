const APIkey = "8e9b6c701c1c48737f12e387a8724a0c";

const getCoords = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export function getWeather() {
  return getCoords()
    .then((coords) => {
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=imperial&appid=${APIkey}`
      ).then((res) => checkResponse(res));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
}
