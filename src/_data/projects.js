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

const generateNav = (htmlContent) => {
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;
    const headings = document.querySelectorAll("h2, h3");
    let output = "<ul>";

    headings.forEach((heading) => {
        const text = heading.textContent.replace(/\s+/g, "-");
        heading.id = text;
        const tag = heading.tagName.toLowerCase();
        output += `<li data-heading="${tag}"><a href="#${text}">${heading.textContent}</a></li>`;
    });

    output += "</ul>";
    return {
        nav: output,
        content: document.body.innerHTML,
    };
};

// Export an asynchronous function to fetch project data
module.exports = async function () {
    try {
        const projectsFilePath = path.join(__dirname, "../projects/projects.json");
        const projects = await loadJSON(projectsFilePath);
        const markdownContents = []; // Array to store markdown content
        const headings = [];
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

            const { nav, content } = generateNav(markdownContent);

            markdownContents.push({
                name: item.name,
                nav: nav,
                html: content,
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
