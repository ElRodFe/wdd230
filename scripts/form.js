//CHECK IF THE PASSWORD MATCH

const p1 = document.querySelector("#password");
const p2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

p2.addEventListener("focusout", checkSame);

function checkSame() {
    if (p1.value !== p2.value) {
        message.textContent = "Passwords do not match";
        message.style.visibility = "show";
        p2.style.backgroundColor = "#FFA6A6";
    }
    else {
        message.style.display = "none";
        p2.style.backgroundColor = "#BAFFB2";
        p2.style.color = "#053100";
    }
}

//RANGE VALUES INPUT 

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}