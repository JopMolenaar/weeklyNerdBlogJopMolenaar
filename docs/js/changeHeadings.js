const h1s = document.querySelectorAll("article > div h1");
const h2s = document.querySelectorAll("article > div h2");
const h3s = document.querySelectorAll("article > div h3");
const h4s = document.querySelectorAll("article > div h4");

function changeHeadingLevel(oldHeadings, newLevel) {
    oldHeadings.forEach((oldHeading) => {
        const newHeading = document.createElement(newLevel);
        newHeading.innerHTML = oldHeading.innerHTML;
        Array.from(oldHeading.attributes).forEach((attr) => newHeading.setAttribute(attr.name, attr.value));
        oldHeading.parentNode.replaceChild(newHeading, oldHeading);
    });
}

if (h1s.length > 0) {
    changeHeadingLevel(h1s, "h2");
    changeHeadingLevel(h2s, "h3");
    changeHeadingLevel(h3s, "h4");
    changeHeadingLevel(h4s, "h5");
}
