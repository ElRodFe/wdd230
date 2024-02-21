const favchap = document.querySelector("#favchap");
const button = document.querySelector("#button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

button.addEventListener("click", function () {
    if (favchap.value == "") {
        favchap.focus()
    }
    else {
        displayList(favchap.value);
        chaptersArray.push(favchap.value);
        setChapterList();
        favchap.value = "";
        favchap.focus();
    }
})

// Adding entrys with "Enter" key
favchap.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        button.click();
    }
})

chaptersArray.forEach(chapter => {
    displayList(chapter)
});

function displayList(item) {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = item;
    deleteButton.textContent = "X";

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        item.focus();
        item.value = "";
    })
};

function setChapterList() {
    localStorage.setItem("favBOMList", JSON.stringify(chaptersArray));
};

function getChapterList() {
    return JSON.parse(localStorage.getItem("favBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}