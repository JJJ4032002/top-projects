const API_KEY = '3873a8dd6a78429394034449232210';
const BASE_URL = 'http://api.weatherapi.com/v1';
const apiMethod = 'current';
const queryParam = 'London';

const infoHero = document.querySelector('h2');

const getWeather = async function getWeatherFromAPI() {
    const apiResponse = await fetch(
        `${BASE_URL}/${apiMethod}.json?key=${API_KEY}&q=${queryParam}`,
        { mode: 'cors' },
    );
    console.log(apiResponse);
    if (apiResponse.ok) {
        const weatherData = await apiResponse.json();
        console.log(weatherData);
        infoHero.innerText += `: ${weatherData.current.feelslike_c} degrees celsius`;
    }
};

getWeather();
