var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + "/app",


  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './Main.js',
    './index.html'
  ],
  output: { path: __dirname + '/dist', filename: 'bundle.js' },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};