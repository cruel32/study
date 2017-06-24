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
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
      contentBase: buildPath,
      historyApiFallback: true,
      publicPath: '/',
      port: 8080,
      compress: false,
      hot: true,
      open:true,
      host: '127.0.0.1'
    },
    // devtool:'source-map',
    module: {
      rules: [
        {
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            include: path.join(__dirname, `${sourceFolder}`),
            use: [
              {
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        ['es2015', { modules: false }],
                        'react',
                    ],
                    plugins: [
                    ],
                }
              }
            ]
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
          test: /\.(jpeg|png|gif|svg)$/i,
          exclude: /node_modules/,
          loader: 'file-loader?name=images/[name].[ext]'
        },
      ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
          filename: `./index.html`, // 빌드후 만들어지는 파일명
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
};