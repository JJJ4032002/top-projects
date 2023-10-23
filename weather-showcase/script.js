const API_KEY = '3873a8dd6a78429394034449232210';
const BASE_URL = 'http://api.weatherapi.com/v1';
const apiMethod = 'current';
const queryParam = 'London';

const stateIconCont = document.querySelector('.stateIcon');
const icon = stateIconCont.querySelector('img');
const currentTemp = document.querySelector('#currTempInfo');

const setProps = (weatherData) => {
    currentTemp.innerText += ` ${weatherData.current.feelslike_c} °C`;
    const iconURL = `https:${weatherData.current.condition.icon}`;
    icon.src = iconURL;
};

const getWeather = async function getWeatherFromAPI() {
    const apiResponse = await fetch(`${BASE_URL}/${apiMethod}.json?key=${API_KEY}&q=${queryParam}`, { mode: 'cors' });
    console.log(apiResponse);
    if (apiResponse.ok) {
        const weatherData = await apiResponse.json();
        console.log(weatherData);
        setProps(weatherData);
    }
};

getWeather();
