const tempDesc = document.querySelector("#temp-desc");
const weatherIcon = document.querySelector("#weathericon");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-33.24797593310069&lon=-58.021032772959686&units=imperial&appid=918a9b08387f62f77d54e582cc9ef367";

async function getWeather(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();

            displayWeather(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error)
    }
}

function displayWeather(data) {
    const temperature = data.main.temp;
    const temp = temperature.toFixed(0);

    const desc = data.weather[0].description;
    const capitalizedDesc = capitalizeWords(desc);

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`

    tempDesc.textContent = `${temp}°F - ${capitalizedDesc}`;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "weather icon");

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }
}

getWeather(url);