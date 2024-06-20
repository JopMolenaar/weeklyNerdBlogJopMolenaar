const h1s = document.querySelectorAll("article > div h1");
const h2s = document.querySelectorAll("article > div h2");
const h3s = document.querySelectorAll("article > div h3");
const h4s = document.querySelectorAll("article > div h4");
const h5s = document.querySelectorAll("article > div h5");

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
    changeHeadingLevel(h5s, "h4");
}

function deleteFirstHeading() {
    let headingToDelete;
    headingToDelete = document.querySelector(".content h1");
    if (!headingToDelete) {
        headingToDelete = document.querySelector(".content h2");
    }
    headingToDelete.remove();
}

// add sections around each heading and its siblings, this will result in a more correct semantic on the page. And evenly high headings will be able to push eachother out of the screen.
document.addEventListener("DOMContentLoaded", () => {
    // Select all relevant elements within the article
    const allElements = document.querySelectorAll(
        "article > div h1, article > div h2, article > div h3, article > div h4, article > div h5, article > div p, article > div ul, article > div ol, article > div li, article > div pre, article > div code, article > div blockquote, article > div a"
    );

    const sectionStack = [];

    allElements.forEach((element) => {
        if (element.matches("h1, h2, h3, h4, h5")) {
            const newSection = document.createElement("section");

            // Find the correct parent section based on the heading level
            const level = parseInt(element.tagName[1]); // Extract the heading level (1, 2, 3, etc.)

            // Pop sections from the stack until we find the correct level
            while (sectionStack.length > 0 && parseInt(sectionStack[sectionStack.length - 1].dataset.level) >= level) {
                sectionStack.pop();
            }

            // Append the new section to the current top section in the stack, or to the parent if stack is empty
            if (sectionStack.length === 0) {
                element.parentNode.insertBefore(newSection, element);
            } else {
                sectionStack[sectionStack.length - 1].appendChild(newSection);
            }

            // Append the heading to the new section
            newSection.appendChild(element);
            newSection.dataset.level = level; // Store the heading level in the section
            sectionStack.push(newSection);
        } else {
            // Check if the element should be skipped to preserve semantics
            const parentTag = element.parentNode.tagName.toLowerCase();
            if (["ul", "ol", "pre", "li"].includes(parentTag) || element.matches("a, code")) {
                return;
            }

            // Append other elements (p, ul, ol, pre, blockquote) to the current section
            if (sectionStack.length > 0) {
                sectionStack[sectionStack.length - 1].appendChild(element);
            }
        }
    });
    const allSections = scrollContainer.querySelectorAll("section");
    // console.log(allSections);
    allSections.forEach((section) => {
        scrollContainer.addEventListener("scroll", () => {
            findOverlappingHeadings(section);
        });
    });
});



// TODO target writes it over, but when you scroll again it returns to the scroll thing