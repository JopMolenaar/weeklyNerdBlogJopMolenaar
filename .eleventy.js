const projectsData = require("./src/_data/projects");

module.exports = function (eleventyConfig) {
    // Copy static assets (like images and CSS)
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/js");

    // // Add data files directory
    // eleventyConfig.addCollection("projects", async function (collectionApi) {
    //     // Use the projects data file to populate the 'projects' collection
    //     return await collectionApi.getFilteredByGlob("_data/projects.js");
    // });
    // Add projects collection
    eleventyConfig.addCollection("projects", async () => {
        const projects = await projectsData();
        // console.log(projects);
        return projects.projects;
    });

    return {
        dir: {
            input: "src",
            output: "docs",
            data: "_data",
            includes: "_includes",
        },
        markdownTemplateEngine: "ejs", // Use EJS for Markdown files
        htmlTemplateEngine: "ejs", // Use EJS for HTML files
    };
};
