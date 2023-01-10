const markdownIt = require("markdown-it");
const markdownItAttrs = require('markdown-it-attrs');
var markdownItContainer = require("markdown-it-container")

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('script');
  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: true
  }
  const markdownLib = markdownIt(markdownItOptions)
    .use(markdownItAttrs)
    .use(markdownItContainer, "wrapper")
  eleventyConfig.setLibrary('md', markdownLib)

  return {
    markdownTemplateEngine: "njk",
    dir: {
      data: "_data",
      output: "dist"
    }
  };

}