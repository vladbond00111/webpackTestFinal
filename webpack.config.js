let path = require('path');
let webpack = require('webpack');


module.exports = {
  entry: './js/index.js' ,
    // index: path.resolve(__dirname, './js/index.js'),

    
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '.bundle'),


    // filename: 'build.js'
  },


//   module: {
//     rules: [
//         {
//           test: /\.scss$/,
//           use: [
//               // MiniCssExtractPlugin.loader,
//               'style-loader',
//               'css-loader',
//               'sass-loader'
//           ]
//       }
//     ]
};
