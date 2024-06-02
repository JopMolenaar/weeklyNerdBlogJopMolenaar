var output = "";
const nav = document.querySelectorAll(".nav");

const makeNav = () => {
    const firstElement = document.querySelector("div h2");
    if (firstElement) {
        const text = firstElement.textContent.replace(/\s+/g, "-");
        firstElement.id = text;
        output += `<li data-heading="h2" ><a href=#${text}>` + firstElement.textContent + "</a></li>";
        let nextElement = firstElement.nextElementSibling;
        while (nextElement) {
            if (nextElement.tagName === "H2") {
                const text = nextElement.textContent.replace(/\s+/g, "-");
                nextElement.id = text;
                output += `<li data-heading="h2" ><a href=#${text}>` + nextElement.textContent + "</a></li>";
            } else if (nextElement.tagName === "H3") {
                const text = nextElement.textContent.replace(/\s+/g, "-");
                nextElement.id = text;
                output += `<li data-heading="h3" ><a href=#${text}>` + nextElement.textContent + "</a></li>";
            }
            nextElement = nextElement.nextElementSibling;
        }
        nav.innerHTML = output;
    }
};
// makeNav();

// const pathname = window.location.pathname;
// console.log("Path", pathname);

// const activeLink = document.querySelector(`a[href="${pathname}"]`);
// activeLink.classList.add("active-link");
