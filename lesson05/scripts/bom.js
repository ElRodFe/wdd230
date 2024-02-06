const favchap = document.querySelector("#favchap");
const button = document.querySelector("#button");
const list = document.querySelector("#list");

button.addEventListener("click", function () {
    if (favchap.value == "") {
        favchap.focus()
    }
    else {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        li.textContent = favchap.value;
        deleteButton.textContent = "X";

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            favchap.focus();
            favchap.value = "";
        })
    }
})