// region Variables declare
const API_KEY = '3873a8dd6a78429394034449232210';
const BASE_URL = 'http://api.weatherapi.com/v1';
const apiMethod = 'forecast';
const queryParam = 'Mutare';

const stateIconCont = document.querySelector('.stateIcon');
const iconImg = stateIconCont.querySelector('img');
const currentTemp = document.querySelector('#currTempInfo');
const currTime = document.querySelector('.stateIcon > h5');
const searchBox = document.querySelector('#searchBox');
const country = document.querySelector('.country');
const city = document.querySelector('#city');
const rowNode = document.querySelectorAll('.tableRow');
const rowList = [...rowNode];

// endregion

/**
 * This method makes the body visible or invisible
 * @param state display type of either none or initial
 */
function bodyDisplay(state) {
    document.querySelector('body').style.display = state;
}

/**
 * This method takes the api response object and returns a list of objects for all 24 hours, starting at 00 to
 * 23hrs
 * @param weatherData api object
 * @returns [] list of objects
 */
const buildForecast = (weatherData) => {
    const hoursList = weatherData.forecast.forecastday[0].hour;
    // console.log(hoursList);
    return hoursList;
};

/**
 * This function takes in a string made up of  2 words; date string and time string. It returns a list of the time string and date string
 * @param timeContainer A string with 2 groups of words where the 2nd one is a time string and 1st one is a date string
 * @returns {*[]} list of time and date strings
 */
function getTime(timeContainer) {
    const timeInfo = timeContainer.split(' ');
    const currentTimeInfo = timeInfo[1];
    const currentDateInfo = timeInfo[0];
    return [currentTimeInfo, currentDateInfo];
}

/**
 * This function processes each row by updating the values of each row column with the values from the api response
 * @param weatherData json object from the api call
 */
function processRows(weatherData) {
    // console.log(weatherData.forecast.forecastday[0].hour[0].time);
    // console.log(weatherData.forecast.forecastday[0].hour[0].temp_c);
    const hoursList = buildForecast(weatherData);
    let nextTimeHour = 0;
    let showDate = false;
    const currTimeHour = parseInt(getTime(weatherData.location.localtime)[0].substring(0, 2), 10);
    if (currTimeHour === 23) {
        nextTimeHour = -1;
        showDate = true;
    }
    nextTimeHour = currTimeHour + 1;
    for (let i = 0; i < rowList.length; i += 1) {
        const tableRow = rowList[i];
        const timeEl = tableRow.querySelector('.tblTime');
        const tempEl = tableRow.querySelector('.tblTemp');
        const chanceEl = tableRow.querySelector('.tblChanceR');
        const windEl = tableRow.querySelector('.tblWindS');

        // console.log(`Before incr: ${nextTimeHour}`);
        const hourObj = hoursList[nextTimeHour];
        const showTime = hoursList[nextTimeHour].time;
        timeEl.innerText = `${showTime.substring(0)}`;
        nextTimeHour += 1;
        // console.log(`After incr: ${nextTimeHour}`);
        tempEl.innerText = hourObj.temp_c;
        chanceEl.innerText = `${hourObj.chance_of_rain} %`;
        windEl.innerText = `${hourObj.wind_kph} kph`;
    }
}

/**
 * This method sets the values of all the elements that need to be updated
 * @param weatherData
 */
const setProps = (weatherData) => {
    currentTemp.innerText = `Current temperature: ${weatherData.current.feelslike_c} °C`;
    country.innerText = weatherData.location.country;
    city.innerText = weatherData.location.name;
    // eslint-disable-next-line prefer-destructuring
    currTime.innerText = getTime(weatherData.location.localtime)[0];
    processRows(weatherData);
};

/**
 * This method gets the json object from the API
 * @returns {Promise<number>}
 */
const getWeather = async function getWeatherFromAPI(queryVal) {
    const apiResponse = await fetch(
        `${BASE_URL}/${apiMethod}.json?key=${API_KEY}&q=${queryVal}`,
        { mode: 'cors' },
    );
    if (apiResponse.ok) {
        const wd = await apiResponse.json();
        bodyDisplay('initial');
        return wd;
    }
    return -1;
};

function showDiagOnError() {
    document.querySelector('dialog').showModal();
}

const diagBtn = document.querySelector('button');
diagBtn.addEventListener('click', (el) => {
    document.querySelector('dialog').showModal();
});

function closeDialog() {
    document.querySelector('dialog').close('');
}

const closeDiagBtn = document.querySelector('.errorDiv > button');
closeDiagBtn.addEventListener('click', closeDialog);

async function main(queryValue) {
    bodyDisplay('none');
    const weatherData = await getWeather(queryValue);
    if (weatherData !== -1) {
        setProps(weatherData);
    } else {
        showDiagOnError();
    }
    bodyDisplay('initial');
}

function updateLocation() {
    main(searchBox.value);
}

searchBox.addEventListener('change', updateLocation);
main(queryParam);
