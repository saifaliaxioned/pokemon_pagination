module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('script');
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data"
    }
  };
}