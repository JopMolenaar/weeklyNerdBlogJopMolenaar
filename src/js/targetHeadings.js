const h2 = document.querySelectorAll("h2");
const h3 = document.querySelectorAll("h3");
const h4 = document.querySelectorAll("h4");

h2.forEach((h) => {
    h.setAttribute("id", h.textContent.replace(/\s+/g, ""));
});
h3.forEach((h) => {
    h.setAttribute("id", h.textContent.replace(/\s+/g, ""));
});
h4.forEach((h) => {
    h.setAttribute("id", h.textContent.replace(/\s+/g, ""));
});
