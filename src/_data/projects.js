// const fs = require("fs");
// const path = require("path");
// const axios = require("axios");
// const { marked } = require("marked");

// function loadJSON(filename) {
//     console.log("Get:", filename);
//     if (fs.existsSync(filename)) {
//         // Read file asynchronously and parse JSON data
//         return new Promise((resolve, reject) => {
//             fs.readFile(filename, (err, data) => {
//                 const jsonData = JSON.parse(data);
//                 resolve(jsonData); // Resolve with parsed JSON data
//             });
//         });
//     } else {
//         // File does not exist, return null or appropriate value
//         return Promise.resolve(null);
//     }
// }

// // Parse local Markdown file to HTML
// const parseToHTML = (markdownFile) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile(markdownFile, "utf8", (err, data) => {
//             if (err) {
//                 console.error("Error reading file:", err);
//                 reject(err);
//             } else {
//                 const html = marked(data);
//                 resolve(html);
//             }
//         });
//     });
// };

// // Parse remote Markdown file to HTML
// const parseHTTPmdToHTML = async (url) => {
//     try {
//         const response = await axios.get(url);
//         const html = marked(response.data);
//         return html;
//     } catch (error) {
//         console.error("Error fetching file:", error);
//         throw error;
//     }
// };

// // Export an asynchronous function to fetch project data
// module.exports = async function () {
//     try {
//         const projectsFilePath = path.join(__dirname, "../projects/projects.json");
//         const projects = await loadJSON(projectsFilePath);

//         const markdownContents = []; // Array to store markdown content
//         for (const item of projects) {
//             let markdownContent;
//             let descriptionContent = "";

//             if (item.descLink) {
//                 if (!item.descLink.startsWith("http")) {
//                     markdownContent = await parseToHTML(item.descLink); // Parse markdown file
//                 } else {
//                     markdownContent = await parseHTTPmdToHTML(item.descLink); // Parse markdown file from HTTP link
//                 }

//                 // Split the markdown content by the <h2> tags
//                 const sections = markdownContent.split(/<h2[^>]*>/);

//                 // Find the section with the "Description" header

//                 for (const section of sections) {
//                     if (section.toLowerCase().includes("description")) {
//                         // Get the content after the "Description" header
//                         const startIndex = section.indexOf("</h2>") + 5; // End of the header tag
//                         descriptionContent = section.substring(startIndex).trim();

//                         // Remove <p></p> tags around the content
//                         descriptionContent = descriptionContent.replace(/^<p>([\s\S]*)<\/p>$/, "$1");
//                         break;
//                     }
//                 }
//             }
//             let projectDescription = "";
//             if (descriptionContent !== "") {
//                 projectDescription = descriptionContent;
//                 console.log("yeah", descriptionContent);
//             } else {
//                 projectDescription = item.littleDesc;
//             }

//             // Add the markdown content and project name to the array
//             markdownContents.push({
//                 dataName: item.dataName,
//                 name: item.name,
//                 projectDescription: projectDescription, // Use "No content" if descriptionContent is empty
//                 linkToRepo: item.linkToRepo,
//                 linkToWebsite: item.linkToWebsite,
//                 images: item.images,
//                 usedSkills: item.usedSkills,
//                 grade: item.grade,
//                 date: item.date,
//                 img: item.img,
//                 imgAlt: item.imgAlt,
//                 littleDesc: projectDescription,
//                 prize: item.prize,
//             });
//         }

//         return {
//             projects: markdownContents, // Assuming projects data is an array of objects
//         };
//     } catch (error) {
//         console.error("Error fetching projects:", error);
//         return {
//             projects: [], // Return empty array in case of error
//         };
//     }
// };

const fs = require("fs");
const marked = require("marked");
const express = require("express");
const axios = require("axios");
const app = express();
const path = require("path");
let ejs = require("ejs");
app.set("view engine", "ejs");
// app.use(express.static("static"));
const notFoundPage = path.join(__dirname, "views", "notFound.ejs");

const allLinks = [
    {
        paramId: "notesKilian",
        link: "projects/notesKilian.md",
    },
    {
        paramId: "notesFenna",
        link: "projects/notesFenna.md",
    },
    {
        paramId: "processWAFS",
        link: "https://jopmolenaar.github.io/web-app-from-scratch-2324/process.md",
    },
    {
        paramId: "notesJeffry",
        link: "projects/notesJeffry.md",
    },
    {
        paramId: "notesNils",
        link: "projects/notesNils.md",
    },
    {
        paramId: "notesJeremy",
        link: "projects/notesJeremy.md",
    },
    {
        paramId: "notesMarieke",
        link: "projects/notesMarieke.md",
    },
    {
        paramId: "notesRosa",
        link: "projects/notesRosa.md",
    },
    {
        paramId: "processCSS",
        link: "https://jopmolenaar.github.io/CSS-cockpit-control/process.md",
    },
    {
        paramId: "processBT",
        link: "https://jopmolenaar.github.io/BT-form-validatie/process.md",
    },
    {
        paramId: "Hackathon",
        link: "projects/hackathon.md",
    },
    {
        paramId: "processAPI",
        link: "https://raw.githubusercontent.com/JopMolenaar/API-JopMolenaar/main/processAPI.md",
    },
    {
        paramId: "processHCD",
        link: "https://raw.githubusercontent.com/JopMolenaar/HCD-videoExperienceForMarie/main/README.md",
    },
];

app.get("/home", function (req, res) {
    res.render("home");
});

// Define a route with a dynamic :id parameter
app.get("/:id", async function (req, res) {
    try {
        const id = req.params.id;
        let html;

        for (const item of allLinks) {
            if (id === item.paramId && !item.link.startsWith("http")) {
                html = await parseToHTML(item.link);
            } else if (id === item.paramId) {
                html = await parseHTTPmdToHTML(item.link);
            }
        }

        if (!html) {
            console.log("notFound");
            res.status(404).render(notFoundPage);
            return;
        }

        // Render the EJS template with the HTML content
        res.render("index", { html: html });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error reading file");
    }
});

// Parse local Markdown file to HTML
const parseToHTML = (markdownFile) => {
    return new Promise((resolve, reject) => {
        fs.readFile(markdownFile, "utf8", (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                reject(err);
            } else {
                const html = marked(data);
                resolve(html);
            }
        });
    });
};

// Parse remote Markdown file to HTML
const parseHTTPmdToHTML = async (url) => {
    try {
        const response = await axios.get(url);
        const html = marked(response.data);
        return html;
    } catch (error) {
        console.error("Error fetching file:", error);
        throw error;
    }
};

app.listen(3030, () => {
    console.log("Server is listening on port 3030");
});
