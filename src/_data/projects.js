const fs = require("fs");
const path = require("path");
const axios = require("axios");
const { marked } = require("marked");
const { JSDOM } = require("jsdom");

function loadJSON(filename) {
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

const generateHeadingsArray = (htmlContent) => {
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;
    const headings = document.querySelectorAll("h2, h3");
    let headingsArray = [];

    headings.forEach((heading) => {
        const text = heading.textContent.trim();
        const tag = heading.tagName.toLowerCase();
        const target = text.replace(/\s+/g, "");
        heading.setAttribute("id", target);
        // console.log("Modified Heading:", heading.outerHTML); // Log the modified heading
        headingsArray.push({ tag: tag, text: text, target });
    });

    // Serialize the modified DOM back to HTML
    const updatedHtmlContent = dom.serialize();

    return { headingsArray, updatedHtmlContent };
};

// Export an asynchronous function to fetch project data
module.exports = async function () {
    try {
        const projectsFilePath = path.join(__dirname, "../projects/projects.json");
        const projects = await loadJSON(projectsFilePath);
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

            const output = generateHeadingsArray(markdownContent);
            // TODO make all h2 or higher, lower then h2 and so on
            const headings = output.headingsArray;
            const htmlContent = output.updatedHtmlContent;

            markdownContents.push({
                name: item.name,
                nav: headings,
                html: htmlContent,
                img: item.img,
                id: item.paramId,
            });
        }

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
