const form = document.querySelector("form");

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const datetime = document.querySelector("#datetime");

    datetime.value = Date.now();

    form.submit();
});