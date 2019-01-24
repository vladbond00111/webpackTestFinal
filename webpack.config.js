const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// let webpack = require('webpack');


module.exports = {
  entry: './src/index.js' ,
    // index: path.resolve(__dirname, './src/js/index.js'),

    
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '.bundle'),
  },




  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]

  // module: {
  //   loaders: [
  //     {
  //       test: /\.scss$/,
  //       loader: "style!css!sass"
  //     }
  //   ]
  // }
  // module: {
  //   rules: [
  //     {
  //       test: /\.scss$/,
  //       use: [
  //         // MiniCssExtractPlugin.loader,
  //         'style-loader',
  //         'css-loader',
  //         'sass-loader'
  //       ]
  //     }
  //   ]
  // }
};
