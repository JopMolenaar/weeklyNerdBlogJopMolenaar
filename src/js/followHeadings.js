console.log("hi");

// See which heading is the heighest in the viewport
// search that heading in the .nav
// place on that heading in the nav a data set of in viewport
document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.querySelector("article > div.content"); // Adjust selector to your scrollable div
    const headings = scrollContainer.querySelectorAll("h1, h2, h3, h4, h5");
    const navItems = document.querySelectorAll(".nav a"); // Assuming the nav items are links

    function checkHeadingsInView() {
        let highestHeading = null;
        let highestHeadingTop = scrollContainer.clientHeight; // Initialize with the bottom of the container

        // Determine which heading is the highest in the viewport
        headings.forEach((heading) => {
            const rect = heading.getBoundingClientRect();
            const containerRect = scrollContainer.getBoundingClientRect();
            const headingTopRelativeToContainer = rect.top - containerRect.top;

            if (headingTopRelativeToContainer >= 0 && headingTopRelativeToContainer < highestHeadingTop) {
                highestHeadingTop = headingTopRelativeToContainer;
                highestHeading = heading;
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
