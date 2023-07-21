module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });
  eleventyConfig.addPassthroughCopy({ "src/video": "video" });

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false, // to allow liquid includes without quotation marks
    strictFilters: false, // so disable throwing errors for undefined filters
  });

  return {
    dir: {
      input: "src/pages",
      includes: "../_includes",
      layouts: "../_includes/layouts",
      output: "dist",
    },

    // PATH PREFIX (OPTIONAL)
    // if posting your site in a sub directory, and
    // if you do not want to use relative paths via the relative path fix include,
    // then you can use pathPrefix as an alternative:
    //,
    // pathPrefix: '/mysubdir/pathtosite/',
  };
};
