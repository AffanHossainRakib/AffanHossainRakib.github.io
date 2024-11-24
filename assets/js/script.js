// script.js: Dynamically load header, footer, and meta components
document.addEventListener("DOMContentLoaded", () => {
    // Load meta tags
    fetch("components/meta.html")
        .then((response) => response.text())
        .then((data) => {
            document.head.innerHTML += data;
        });

    // Load header
    fetch("components/header.html")
        .then((response) => response.text())
        .then((data) => {
            document.body.insertAdjacentHTML("afterbegin", data);
        });

    // Load footer
    fetch("components/footer.html")
        .then((response) => response.text())
        .then((data) => {
            document.body.insertAdjacentHTML("beforeend", data);
        });
});
