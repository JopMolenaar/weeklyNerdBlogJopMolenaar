const ul = document.querySelector("ul");
const lis = ul.querySelectorAll("li");
const as = ul.querySelectorAll("a");

const positionValues = [
    {
        top: "4vh",
        left: "28vw",
    },
    {
        top: "7vh",
        left: "55vw",
    },
    {
        top: "6vh",
        left: "81vw",
    },
    {
        top: "6vh",
        left: "112vw",
    },
    {
        top: "10vh",
        left: "3vw",
    },
    {
        top: "40vh",
        left: "36vw",
    },
    {
        top: "35vh",
        left: "90vw",
    },
    {
        top: "46vh",
        left: "115vw",
    },
    {
        top: "79vh",
        left: "10vw",
    },
    {
        top: "72vh",
        left: "36vw",
    },
    {
        top: "38vh",
        left: "62vw",
    },
    {
        top: "69vh",
        left: "88vw",
    },
    {
        top: "78vh",
        left: "115vw",
    },
    {
        top: "110vh",
        left: "4vw",
    },
    {
        top: "107vh",
        left: "34vw",
    },
    {
        top: "110vh",
        left: "82vw",
    },
    {
        top: "107vh",
        left: "105vw",
    },
    {
        top: "70vh",
        left: "63vw",
    },
    {
        top: "101vh",
        left: "58vw",
    },
    {
        top: "45vh",
        left: "2vw",
    },
];

function hasHover() {
    return window.matchMedia("(hover: hover)").matches;
}

if (hasHover()) {
    function mouseMoveFunction(e) {
        const mouseX = e.clientX,
            mouseY = e.clientY;

        const maxX = ul.offsetWidth - window.innerWidth,
            maxY = ul.offsetHeight - window.innerHeight;

        const xDecimal = mouseX / window.innerWidth,
            yDecimal = mouseY / window.innerHeight;

        const panX = maxX * xDecimal * -1,
            panY = maxY * yDecimal * -1;

        ul.animate(
            {
                transform: `translate(${panX}px, ${panY}px)`,
            },
            {
                duration: 2300,
                fill: "forwards",
                easing: "ease",
            }
        );
    }
    window.addEventListener("mouseover", mouseMoveFunction);

    // Listen for hash changes
    window.addEventListener("hashchange", () => {
        if (window.location.hash) {
            window.removeEventListener("mouseover", mouseMoveFunction);
        } else {
            window.addEventListener("mouseover", mouseMoveFunction);
        }
    });
}


// TODO know when you have scrolled and how far 

lis.forEach((li) => {
    let randomIndex;
    if (positionValues.length === 1) {
        randomIndex = giveRandomNumber(0, 0);
    } else {
        randomIndex = giveRandomNumber(-1, positionValues.length);
    }
    const position = positionValues[randomIndex];
    li.style.top = position.top;
    li.style.left = position.left;

    positionValues.splice(randomIndex, 1);
});

as.forEach((a) => {
    const ratio = giveRandomRatio();
    a.style.width = `${ratio.w}%`;
    a.style.height = `${ratio.h}%`;
});

function giveRandomRatio() {
    const w = giveRandomNumber(100, 60);
    const h = giveRandomNumber(100, 80);
    return { w, h };
}

function giveRandomNumber(num1, num2) {
    return Math.floor(Math.random() * (num1 - num2 + 1)) + num2;
}
