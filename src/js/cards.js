const ul = document.querySelector("ul");
const lis = ul.querySelectorAll("li");
const as = ul.querySelectorAll("a");

const positionValues = [
    {
        top: "2.86%",
        left: "20%",
    },
    {
        top: "5%",
        left: "39.29%",
    },
    {
        top: "4.29%",
        left: "57.86%",
    },
    {
        top: "4.29%",
        left: "80%",
    },
    {
        top: "7.14%",
        left: "2.14%",
    },
    {
        top: "28.57%",
        left: "25.71%",
    },
    {
        top: "25%",
        left: "64.29%",
    },
    {
        top: "32.86%",
        left: "82.14%",
    },
    {
        top: "56.43%",
        left: "7.14%",
    },
    {
        top: "51.43%",
        left: "25.71%",
    },
    {
        top: "27.14%",
        left: "44.29%",
    },
    {
        top: "49.29%",
        left: "62.86%",
    },
    {
        top: "55.71%",
        left: "82.14%",
    },
    {
        top: "78.57%",
        left: "2.86%",
    },
    {
        top: "76.43%",
        left: "24.29%",
    },
    {
        top: "78.57%",
        left: "58.57%",
    },
    {
        top: "76.43%",
        left: "75%",
    },
    {
        top: "50%",
        left: "45%",
    },
    {
        top: "72.14%",
        left: "41.43%",
    },
    {
        top: "32.14%",
        left: "1.43%",
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
