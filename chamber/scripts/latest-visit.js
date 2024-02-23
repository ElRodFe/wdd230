const div = document.querySelector("#last-visit");

function displayWelcomeMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    if (!lastVisit) {

        div.textContent = "Let us know if you have any questions.";
    } else {
        const lastVisitDate = new Date(lastVisit);
        const timeDifference = Math.floor((currentDate - lastVisitDate) / (24 * 60 * 60 * 1000));

        if (timeDifference < 1) {

            div.textContent = 'Back so soon, Awesome!';
        } else {

            const pluralDays = timeDifference === 1 ? 'day' : 'days';
            div.textContent = `Your last visit was ${timeDifference} ${pluralDays} ago.`;
        }
    }


    localStorage.setItem('lastVisit', currentDate.toISOString());
}


displayWelcomeMessage();