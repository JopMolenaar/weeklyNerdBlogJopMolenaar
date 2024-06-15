const links = document.querySelectorAll("a");
// if (links) {
//     links.forEach((link) => {
//         link.onclick = (e) => {
//             const body = document.querySelector("body");
//             const parent = link.parentElement;
//             e.preventDefault();
//             setTimeout(function () {
//                 if (body.classList.contains("fade-out")) {
//                     console.log("navigating");
//                     if (!e.srcElement.parentElement.href) {
//                         window.location = e.srcElement.href;
//                     } else {
//                         window.location = e.srcElement.parentElement.href;
//                     }
//                 } else {
//                     console.log("whoops", e.srcElement.parentElement.href);
//                 }
//             }, 500);
//             body.classList.add("fade-out");
//             parent.classList.add("grow");
//         };
//     });
// }

links.forEach((link)=>[
link.addEventListener((e)=>[
    handleClick(e)
])
])

function handleClick(e) {
    // Fallback for browsers that don't support this API:
    if (!document.startViewTransition) {
        updateTheDOMSomehow();
        return;
    }

    // With a View Transition:
    document.startViewTransition(() => updateTheDOMSomehow());
}