//"start": "gulp && start http://localhost:5000/jqPlugin/map.html && gulp serve"

const webpack = require('webpack'),
  path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  // DashboardPlugin = require('webpack-dashboard/plugin'),
  // HtmlWebpackPlugin = require('html-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  nodeEnv = process.env.NODE_ENV || 'development',
  isProduction = nodeEnv === 'production';

const sourcePath = path.join(__dirname, './source')
    buildPath = path.join(__dirname, './build'),
    jsSourcePath = path.join(sourcePath, './app'),
    cssSourcePath = path.join(sourcePath, './sass'),
    imgPath = path.join(sourcePath, './images');

// Common plugins
const plugins = [
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'vendor',
  //   minChunks: Infinity,
  //   filename: 'vendor.js',
  // }),
  // new webpack.DefinePlugin({
  //   'process.env': {
  //     NODE_ENV: JSON.stringify(nodeEnv),
  //   },
  // }),
  // new webpack.NamedModulesPlugin(),
  // new HtmlWebpackPlugin({
  //   template: path.join(sourcePath, './html/index.html'),
  //   path: buildPath,
  //   filename: 'index.html',
  // }),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer({
          browsers: [
            'last 3 version',
            'ie >= 9',
          ],
        }),
      ],
      context: sourcePath,
    }
  }),
];

// Common rules
const rules = [
  {
    test: /.(js|jsx)$/,
    exclude: /node_modules/,
    include: jsSourcePath,
    use: [{
      loader: 'babel-loader',
      options: {
        presets: [
            ['es2015', { modules: false }],
            'react',
        ]
      }
    }]
  }
];

if (isProduction) {
  // Production plugins
  plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
    new ExtractTextPlugin('style-[hash].css')
  );

  // Production rules
  rules.push(
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!sass-loader',
      }),
    }
  );
} else {
  // Development plugins
  plugins.push(
    new ExtractTextPlugin('[name].css')
    // new webpack.HotModuleReplacementPlugin(),
    // new DashboardPlugin()
  );

  // Development rules
  rules.push(
    {
      test: /\.(scss|sass|css)$/,
      include : cssSourcePath,
      use : ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use:   [
          // {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
                sourceMap: true,
                modules: true,
                importLoaders: true,
                localIdentName: "[local]"
                // localIdentName: "[name]__[local]___[hash:base64:5]"
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
            loader: 'sass-loader',
            options : {
              sourceMap: true
            }
          }
        ],
      })
      
    }
  );
}

const config = {
  // devtool: isProduction ? 'eval' : 'source-map',
  context: jsSourcePath,
  entry: {
    vendor: [
      'babel-polyfill',
      'react-dom',
      'react',
    ],
    snapterest :  `./app.js`,
  },
  output: {
    filename: '[name].js',
    path: buildPath
  },
  module: {
    rules
  },
  // resolve: {
  //   extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
  //   modules: [
  //     path.resolve(__dirname, 'node_modules'),
  //     jsSourcePath,
  //   ],
  // },
  plugins,
  devServer: {
    contentBase: isProduction ? './build' : './source',
    historyApiFallback: true,
    port: 3000,
    compress: isProduction,
    inline: !isProduction,
    hot: !isProduction,
    host: '127.0.0.1',
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      }
    }
  }
}

module.exports = config