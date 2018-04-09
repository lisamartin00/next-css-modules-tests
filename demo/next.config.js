const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: "[local]___[hash:base64:5]",
    minimize: true,
  },
});
