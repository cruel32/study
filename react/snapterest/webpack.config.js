//"start": "gulp && start http://localhost:5000/jqPlugin/map.html && gulp serve"

const webpack = require('webpack'),
  path = require('path'),
  build = `build`,
  origin = `source`,
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  extractCSS = new ExtractTextPlugin('[name].bundle.css');

const config = {
  context: path.resolve(__dirname, origin),
  entry: `./app/app.js`,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, build)
  },
  module: {
    rules: [{
      test: /.(js|jsx)$/,
      exclude: /node_modules/,
      include: path.resolve(__dirname, origin),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
              ['es2015', { modules: false }],
              'react',
          ]
        }
      }]
    },{
      test: /\.(css|sass|scss)$/,
      include: path.resolve(__dirname, origin),
      use: ExtractTextPlugin.extract({
        // fallback: 'style-loader',
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', query: {modules: true, sourceMaps: true } },
          {loader: 'sass-loader'}
        ]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ]
}

module.exports = config