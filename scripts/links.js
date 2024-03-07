const baseURL = "https://elrodfe.github.io/wdd230/";
const linksURL = "https://elrodfe.github.io/wdd230/data/links.json";
const ul = document.querySelector("#lessonList");

async function getLinks(url) {
    const response = await fetch(url);
    const data = await response.json();

    displayLinks(data.lessons);
};

const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.textContent = `Lesson ${week.lesson}: `;
        li.appendChild(h4);

        week.links.forEach((lesson) => {
            const a = document.createElement("a");

            a.setAttribute("href", `${lesson.url}`);
            a.textContent = `${lesson.title}  -  `;

            li.appendChild(a);

        });
        ul.appendChild(li);
    });
};

getLinks(linksURL);