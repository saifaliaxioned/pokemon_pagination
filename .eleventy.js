module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('script');
  return {
    markdownTemplateEngine: "njk",
    dir: {
      data: "_data",
      output: "dist"
    }
  };
}