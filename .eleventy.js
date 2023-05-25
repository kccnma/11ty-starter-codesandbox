
module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy({ 'src/css': 'css' });
    eleventyConfig.addPassthroughCopy({ 'src/js': 'js' });
    eleventyConfig.addPassthroughCopy({ 'src/img': 'img' });
    eleventyConfig.addPassthroughCopy({ 'src/video': 'video' });

    eleventyConfig.setLiquidOptions({
        dynamicPartials: false,
        strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
      });

    return {
        dir: {
            input: 'src/pages',
            includes: "../_includes",
            layouts: '../_includes/layouts',
            output: 'dist'
        }

        //,
        // if posting in a sub directory, use pathPrefix
        // pathPrefix: '/mysubdir/pathtosite/',
    };
};
