const today = document.querySelector("#today-weather");
const tomorrow = document.querySelector("#tomorrow-weather");

const weatherurl = "https://api.openweathermap.org/data/2.5/weather?lat=20.50&lon=-86.94&units=imperial&appid=918a9b08387f62f77d54e582cc9ef367";
const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?lat=20.50&lon=-86.94&units=imperial&appid=918a9b08387f62f77d54e582cc9ef367";

// Weather
async function getWeather(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();


            displayTodayWeather(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayTodayWeather(data) {
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const img = document.createElement("img");

    const temperature = data.main.temp;
    const temp = temperature.toFixed(0);

    const humidity = data.main.humidity;

    const description = data.weather[0].description;
    const desc = capitalizeWords(description);

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`

    p1.textContent = `${temp}°F - ${desc}`;
    p2.textContent = `Humidity: ${humidity}%`;

    img.setAttribute("src", iconsrc);
    img.setAttribute("alt", "weather icon");
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "50");
    img.setAttribute("height", "50");

    today.appendChild(img);
    today.appendChild(p1);
    today.appendChild(p2);

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }
}

// Forecast
async function getForecast(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);


            displayTomorrowWeather(data.list[6]);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayTomorrowWeather(data) {
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const img = document.createElement("img");

    const temperature = data.main.temp;
    const temp = temperature.toFixed(0);

    const humidity = data.main.humidity;

    const description = data.weather[0].description;
    const desc = capitalizeWords(description);

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`

    p1.textContent = `${temp}°F - ${desc}`;
    p2.textContent = `Humidity: ${humidity}%`;

    img.setAttribute("src", iconsrc);
    img.setAttribute("alt", "weather icon");
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "50");
    img.setAttribute("height", "50");

    tomorrow.appendChild(img);
    tomorrow.appendChild(p1);
    tomorrow.appendChild(p2);

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }
}

getWeather(weatherurl);
getForecast(forecasturl);