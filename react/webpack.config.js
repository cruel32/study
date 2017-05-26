//"start": "gulp && start http://localhost:5000/jqPlugin/map.html && gulp serve"

const webpack = require('webpack'),
  path = require('path'),
  build = `build`,
  origin = `source`;

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('[name].bundle.css');

const config = {
  context: path.resolve(__dirname, origin),
  entry: `./app/test.js`,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, build)
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, origin),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', {
              modules: false
            }]
          ]
        }
      }]
    }]
  }
}

// 'style-loader',
// 'css-loader',
// 'sass-loader'
        
module.exports = config