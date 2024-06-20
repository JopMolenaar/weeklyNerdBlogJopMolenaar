// See which heading is the heighest in the viewport
// search that heading in the .nav
// place on that heading in the nav a data set of in viewport
const scrollContainer = document.querySelector("article > div.content"); // Adjust selector to your scrollable div

document.addEventListener("DOMContentLoaded", () => {
    const headings = scrollContainer.querySelectorAll("h1, h2, h3, h4, h5");
    const navItems = document.querySelectorAll(".nav a"); // Assuming the nav items are links

    function checkHeadingsInView() {
        let highestHeading = null;
        let highestHeadingTop = scrollContainer.clientHeight; // Initialize with the bottom of the container
        let headingUnderTheHighestHeading = [];
        // Determine which heading is the highest in the viewport
        headings.forEach((heading) => {
            const rect = heading.getBoundingClientRect();
            const containerRect = scrollContainer.getBoundingClientRect();
            const headingTopRelativeToContainer = rect.top - containerRect.top;

            if (headingTopRelativeToContainer >= 0 && headingTopRelativeToContainer < highestHeadingTop) {
                highestHeadingTop = headingTopRelativeToContainer;
                highestHeading = heading;
                // const section = highestHeading.parentElement;
                // headingUnderTheHighestHeading = section.querySelectorAll("h3");

                // // console.log(headingUnderTheHighestHeading);
                // if (headingUnderTheHighestHeading.length > 0) {
                //     console.log(isElementVisible(headingUnderTheHighestHeading[0]));
                //     console.log();
                //     if (isElementVisible(headingUnderTheHighestHeading[1])) {
                //         isOverlapping(headingUnderTheHighestHeading[0], headingUnderTheHighestHeading[1]);
                //     }
                //     console.log(isElementVisible(headingUnderTheHighestHeading[2]));
                // }

                // console.log(highestHeading);
                // TODO check if there is a heading beneath it (within 20px)
            }
        });

        // Remove the data attribute from all nav items
        navItems.forEach((item) => item.removeAttribute("data-in-viewport"));

        // If a highest heading is found, add the data attribute to the corresponding nav item
        if (highestHeading) {
            const headingId = highestHeading.id;
            const navItem = document.querySelector(`.nav a[href="#${headingId}"]`);
            if (navItem) {
                navItem.setAttribute("data-in-viewport", "true");
            }
        }
    }

    // Check headings in view on load and on scroll within the container
    scrollContainer.addEventListener("scroll", checkHeadingsInView);
    checkHeadingsInView(); // Initial check when the page loads
});

// Function to check if an element is visible in the viewport
function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to check if two elements overlap
function isOverlapping(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return !(rect1.bottom < rect2.top || rect1.top > rect2.bottom);
}

// Function to check if two elements overlap
function isStickingUnderHigherHeading(element1, element2) {
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect();

    return !(rect1.bottom === rect2.top - 2);
}

// Function to find and log overlapping headings
function findOverlappingHeadings(section) {
    // get h2
    // check if h3 is sticking to the h2 with isStickingUnderHigherHeading(element1, element2)
    const headings = section.querySelectorAll("h3");
    for (let i = 0; i < headings.length - 1; i++) {
        if (isElementVisible(headings[i])) {
            for (let j = i + 1; j < headings.length; j++) {
                if (isElementVisible(headings[j])) {
                    if (isOverlapping(headings[i], headings[j])) {
                        console.log(
                            `Overlap found between ${headings[i].tagName} (${headings[i].textContent}) and ${headings[j].tagName} (${headings[j].textContent})`
                        );
                    }
                }
            }
        }
    }
}

