const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { marked } = require("marked");

function loadJSON(filename) {
    console.log("Get filename:", filename);
    if (fs.existsSync(filename)) {
        // Read file asynchronously and parse JSON data
        return new Promise((resolve, reject) => {
            fs.readFile(filename, (err, data) => {
                const jsonData = JSON.parse(data);
                resolve(jsonData); // Resolve with parsed JSON data
            });
        });
    } else {
        // File does not exist, return null or appropriate value
        return Promise.resolve(null);
    }
}

// Parse local Markdown file to HTML
const parseToHTML = (markdownFile) => {
    console.log("PARSE MD");
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
        console.log("PARSE HTTP", url);
        const response = await axios.get(url);
        const html = marked(response.data);
        return html;
    } catch (error) {
        console.error("Error fetching file:", error);
        throw error;
    }
};

// Export an asynchronous function to fetch project data
module.exports = async function () {
    try {
        const projectsFilePath = path.join(__dirname, "../projects/projects.json");
        console.log("path", projectsFilePath);
        const projects = await loadJSON(projectsFilePath);
        console.log("projects", projects);
        const markdownContents = []; // Array to store markdown content
        for (const item of projects) {
            let markdownContent;

            if (item.link) {
                if (!item.link.startsWith("http")) {
                    markdownContent = await parseToHTML(item.link); // Parse markdown file
                } else {
                    markdownContent = await parseHTTPmdToHTML(item.link); // Parse markdown file from HTTP link
                }
            } else {
                markdownContent = "Failed to fetch data";
            }
            // TODO search all headings

            // Add the markdown content and project name to the array
            markdownContents.push({
                name: item.name,
                html: markdownContent,
                img: item.img,
                id: item.paramId,
            });
        }
        console.log(markdownContents);
        return {
            projects: markdownContents, // Assuming projects data is an array of objects
        };
    } catch (error) {
        console.error("Error fetching projects:", error);
        return {
            projects: [], // Return empty array in case of error
        };
    }
};
