// Honda Metro Scooter
const rh1 = document.querySelector("#rh1");
const rf1 = document.querySelector("#rf1");
const wh1 = document.querySelector("#wh1");
const wf1 = document.querySelector("#wf1");

// Honda Dio Scooter
const rh2 = document.querySelector("#rh2");
const rf2 = document.querySelector("#rf2");
const wh2 = document.querySelector("#wh2");
const wf2 = document.querySelector("#wf2");

// Honda PCX150 Scooter
const rh3 = document.querySelector("#rh3");
const rf3 = document.querySelector("#rf3");
const wh3 = document.querySelector("#wh3");
const wf3 = document.querySelector("#wf3");

// Honda Pioneer ATV
const rh4 = document.querySelector("#rh4");
const rf4 = document.querySelector("#rf4");
const wh4 = document.querySelector("#wh4");
const wf4 = document.querySelector("#wf4");

// Jeep Wrangler - 4 door with a/c
const rh5 = document.querySelector("#rh5");
const rf5 = document.querySelector("#rf5");
const wh5 = document.querySelector("#wh5");
const wf5 = document.querySelector("#wf5");

// Jeep Wrangler - 2 door
const rh6 = document.querySelector("#rh6");
const rf6 = document.querySelector("#rf6");
const wh6 = document.querySelector("#wh6");
const wf6 = document.querySelector("#wf6");

const cards = document.querySelector("#vehicle-cards");
const url = "https://elrodfe.github.io/wdd230/final-projext/data/pricing.json";

async function getData(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);

            displayPrices(data.rentals);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayPrices(data) {
    // Honda Metro Scooter
    rh1.textContent = `${data[0].reservation[0].halfDay}`;
    rf1.textContent = `${data[0].reservation[0].fullDay}`;
    wh1.textContent = `${data[0].walkIn[0].halfDay}`;
    wf1.textContent = `${data[0].walkIn[0].fullDay}`;

    // Honda Dio Scooter
    rh2.textContent = `${data[1].reservation[0].halfDay}`;
    rf2.textContent = `${data[1].reservation[0].fullDay}`;
    wh2.textContent = `${data[1].walkIn[0].halfDay}`;
    wf2.textContent = `${data[1].walkIn[0].fullDay}`;

    // Honda PCX150 Scooter
    rh3.textContent = `${data[2].reservation[0].halfDay}`;
    rf3.textContent = `${data[2].reservation[0].fullDay}`;
    wh3.textContent = `${data[2].walkIn[0].halfDay}`;
    wf3.textContent = `${data[2].walkIn[0].fullDay}`;

    // Honda Pioneer ATV
    rh4.textContent = `${data[3].reservation[0].halfDay}`;
    rf4.textContent = `${data[3].reservation[0].fullDay}`;
    wh4.textContent = `${data[3].walkIn[0].halfDay}`;
    wf4.textContent = `${data[3].walkIn[0].fullDay}`;

    // Jeep Wrangler - 4 door with a/c
    rh5.textContent = `${data[4].reservation[0].halfDay}`;
    rf5.textContent = `${data[4].reservation[0].fullDay}`;
    wh5.textContent = `${data[4].walkIn[0].halfDay}`;
    wf5.textContent = `${data[4].walkIn[0].fullDay}`;

    // Jeep Wrangler - 2 door
    rh6.textContent = `${data[5].reservation[0].halfDay}`;
    rf6.textContent = `${data[5].reservation[0].fullDay}`;
    wh6.textContent = `${data[5].walkIn[0].halfDay}`;
    wf6.textContent = `${data[5].walkIn[0].fullDay}`;
}

getData(url);
