const apiKey = '8737c85c1d0580ac6310b3c217558834';
let inputCityName = document.getElementById('searchBar');
let submitBtn = document.getElementById('submitBtn');
let container = document.getElementById('container');


function getDataByCity(cityName) {
  console.log('Searcing data for: ', cityName);
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Handle and display weather data here
      console.log(data);
      getWeatherData(data)
    })
    .catch(error => console.error('Error fetching weather data:', error));
}
getDataByCity('Dumka')

function getWeatherData(data) {
  let gatheredData = [];

  gatheredData.push(data.weather[0]);
  gatheredData.push(data.main);
  gatheredData.push(data.wind);
  gatheredData.push(data.visibility);

  console.log(gatheredData)
}

submitBtn.addEventListener('click', (event)=> {
  event.preventDefault();
  getDataByCity(inputCityName.value);
})



// =======
function displayData(currTemp, maxTemp, minTemp) {
  container.innerHTML = ''
  console.log('data displayed')
  container.innerHTML = `
  <span id="cityName">${inputCityName.value}</span>
      <div id="temp-container">
        <span id="temp">${currTemp}<p>°C</p></span>
        <span>Cloudy ${minTemp} ~ ${maxTemp}°C</span>
      </div>`
  
}