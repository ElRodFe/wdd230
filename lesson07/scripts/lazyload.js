//Last modified for footer for lazyload
const settings = { day: "numeric", month: "numeric", year: "numeric", hour: "numeric" };
let lastModif = new Date(document.lastModified).toLocaleString("en-US", settings);
document.getElementById("lastModified").textContent = `Last Modified: ${lastModif}`;