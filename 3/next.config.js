const withCSS = require('@zeit/next-css');
module.exports = withCSS({
  cssModules: true,
  // webpack: config => {
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     include: '/node_modules/basscss/css',
  //     use: [
  //       {
  //           loader: 'style-loader',
  //       },
  //       {
  //           loader: 'css-loader',
  //           options: {
  //             sourceMap: true,
  //             modules: true,
  //             localIdentName: '[local]___[hash:base64:5]'
  //           }
  //       }
  //     ],
  //   });
    
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     include: '/node_modules/semantic-ui-css',
  //     use: [
  //       {
  //           loader: 'style-loader',
  //       },
  //       {
  //           loader: 'css-loader',
  //           options: {
  //             sourceMap: true
  //           }
  //       }
  //     ],
  //   });
  //   return config;
  // }
});

//module.exports = nextConfig;