const div = document.querySelector("#forecast");
const day1 = document.createElement("p");
const day2 = document.createElement("p");
const day3 = document.createElement("p");

const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?lat=-33.28&lon=-57.99&units=imperial&appid=918a9b08387f62f77d54e582cc9ef367";

async function getforecast(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);

            displayforecast(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error)
    }
};

function displayforecast(data) {
    const firstDay = data.list[8];
    const temp1 = firstDay.main.temp;
    const tempFirstDay = temp1.toFixed(0);
    const dateFirstDay = getDate(firstDay.dt_txt);

    const secondDay = data.list[16];
    const temp2 = secondDay.main.temp;
    const tempSecondDay = temp2.toFixed(0);
    const dateSecondDay = getDate(secondDay.dt_txt);

    const thirdDay = data.list[24];
    const temp3 = thirdDay.main.temp;
    const tempThirdDay = temp3.toFixed(0);
    const dateThirdDay = getDate(thirdDay.dt_txt);

    day1.textContent = `${dateFirstDay} - ${tempFirstDay}°F`;
    day2.textContent = `${dateSecondDay} - ${tempSecondDay}°F`;
    day3.textContent = `${dateThirdDay} - ${tempThirdDay}°F`;

    div.appendChild(day1);
    div.appendChild(day2);
    div.appendChild(day3);
}

function getDate(txt) {
    const date = new Date(txt);

    const day = date.getDate();
    const month = date.getMonth() + 1;

    return `${month}/${day}`;

}

getforecast(forecasturl);