function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayWeatherCondition(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#overview-icon");
  temperatureElement.innerHTML = response.data.name;
  cityElement.innerHTML = Math.round(response.data.main.temp);
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute("src"), `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  iconElement.setAttribute("alt". response.data.weather[0].description);
}

let apiKey = "2c93bb8c539579593628a1f398cf1b65";
let city = "London";
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayWeatherCondition);

//   document.querySelector("#sunset").innerHTML =
//   response.data.sys.sunset;
//   document.querySelector("#sunrise").innerHTML =
//   response.data.sys.sunrise;

// function formattedSunrise(props) {
//   let date = new Date(props.time);

//   let hours = date.getHours();
//   if (hours < 10) {
//     hours = `0${hours}`;
//   }

//   let mins = date.getMinutes();
//   if (mins < 10) {
//     mins = `0${mins}`;
//   }
//   return `${hours}:${mins}`;
// }

// function formattedSunset(props) {
//   let date = new Date(props.time);

//   let hours = date.getHours();
//   if (hours < 10) {
//     hours = `0${hours}`;
//   }

//   let mins = date.getMinutes();
//   if (mins < 10) {
//     mins = `0${mins}`;
//   }
//   return `${hours}:${mins}`;
// }
function searchCity(city) {
  axios.get(apiUrl).then(displayWeatherCondition);
}
searchCity("london");

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "2c93bb8c539579593628a1f398cf1b65";
  let apiUrl = `http://api.openweathermap.org/geo/1.0/reverse??lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
// let cityElement = document.querySelector("#city");
// let cityInput =
// if (cityInput.value) {
//   cityElement.innerHTML = `${cityInput.value}`;
// } else {
//   cityInput.innerHTML = null;
//   alert("Please type a city");
// }

// function convertToCelsius(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature");
//   temperatureElement.innerHTML = 19;
// }

// function convertToFahrenheit(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature");
//   temperatureElement.innerHTML = 66;
// }

// search engine
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let currentButton = document.querySelector("#current-location-button");
currentButton.addEventListener("click", getCurrentLocation);

// get sunrise & sunset
// let sunriseElement = document.querySelector("#sunrise");
// let sunriseTime = new Date();
// sunriseElement.innerHTML = formattedSunrise(sunriseTime);

// change temperature format
// let celsiusLink = document.querySelector("#celcius-link");
// celsiusLink.addEventListener("click", convertToCelsius);

// let fahrenheitLink = document.querySelector("#fahrenheit-link");
// fahrenheitLink.addEventListener("click", convertToFahrenheit);
