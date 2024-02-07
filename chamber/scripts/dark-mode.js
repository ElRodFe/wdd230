const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const nav = document.querySelector(".navigation");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")) {
        body.style.background = "#000";
        body.style.color = "#fff";
        nav.style.border = "2px solid black";
        modeButton.textContent = "🔆";
    } else {
        body.style.background = "#eee";
        body.style.color = "#000";
        nav.style.border = "2px solid #FEFEFE";
        modeButton.textContent = "🕶️";
    }
});