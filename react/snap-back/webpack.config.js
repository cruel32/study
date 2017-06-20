const webpack = require('webpack'),
  path = require('path'),
  autoprefixer = require('autoprefixer'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

let sourceFolder = 'source',
  buildFolder = 'build',
  sourcePath = path.join(__dirname, sourceFolder),
  buildPath = path.join(__dirname, buildFolder),

  nodeEnv = process.env.NODE_ENV || 'development',
  isProduction = nodeEnv === 'production';


module.exports = {
    entry: `./${sourceFolder}/app/app.js`,
    output: {
        filename: 'bundle.js',
        path: buildPath
    },
    devtool:'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: `/`,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            query: {
              "presets": [
                "es2015",
                "stage-0",
                "react"
              ],
              "plugins": [
                  "transform-react-remove-prop-types",
                  "transform-react-inline-elements",
                  "transform-react-constant-elements"
              ]
            }
          }
        },
        {
          test: /\.(scss|sass|css)$/,
          use: ExtractTextPlugin.extract({
            use :[
              {
                loader: "css-loader",
                options: {
                    sourceMap: true
                }
              },
              {
                loader: 'postcss-loader',
                options : {
                  sourceMap: true,
                  plugins : () => [autoprefixer]
                }
              },
              {
                  loader: "sass-loader",
                  options: {
                      sourceMap: true
                  }
              }
            ]
          }),
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          exclude: /node_modules/,
          loader: 'file-loader?name=images/[name].[ext]'
        },
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
          filename: './index.html', // 빌드후 만들어지는 파일이명
          template: `./${sourceFolder}/html/snapterest.html` // 빌드시 사용되는 템플릿
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks: Infinity,
          filename: 'vendor.js',
        }),
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(nodeEnv),
          },
        }),
    ],
    devServer: {
      contentBase: buildPath,
      historyApiFallback: true,
      publicPath: '/',
      port: 3000,
      compress: false,
      hot: true,
      open:true,
      host: '127.0.0.1'
    }
};