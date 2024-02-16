const temp = document.querySelector("#temp");
const windSpeed = document.querySelector("#wind");
const p = document.querySelector(".windchill");
const button = document.querySelector(".weather-button");

button.addEventListener("click", function (event) {
    event.preventDefault();

    const tempValue = parseFloat(temp.value);
    const windSpeedValue = parseFloat(windSpeed.value);

    const result = 35.74 + (0.6215 * tempValue) - (35.75 * Math.pow(windSpeedValue, 0.16)) + (0.4275 * (tempValue * Math.pow(windSpeedValue, 0.16)));

    p.textContent = "The Wind Chill is: " + result.toFixed(2);
});
