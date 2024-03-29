//Date (year) specified for footer
const options = { year: "numeric" };
document.getElementById("datetime").textContent = new Date().toLocaleDateString("en-US", options);

//Last modified for footer
const settings = { day: "numeric", month: "numeric", year: "numeric", hour: "numeric" };
let lastModif = new Date(document.lastModified).toLocaleString("en-US", settings);
document.getElementById("lastModified").textContent = `Last Modified: ${lastModif}`;