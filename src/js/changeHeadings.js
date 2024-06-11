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

deleteFirstHeading();

if (h2s.length > 0) {
    changeHeadingLevel(h3s, "h2");
    changeHeadingLevel(h4s, "h3");
}

function deleteFirstHeading() {
    let headingToDelete;
    headingToDelete = document.querySelector(".content h1");
    if (!headingToDelete) {
        headingToDelete = document.querySelector(".content h2");
    }
    headingToDelete.remove();
}

// TODO CREATE DIVS AROUND THE HEADINGS WITH THE TEXT THAT MATHCES SO THAT DE STICKED HEADING WILL BE PUSHED AWAY