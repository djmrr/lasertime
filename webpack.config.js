var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'webpack/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public/generated'),
    filename: 'bundle.js',
    libraryTarget: 'var',
    library: 'Lasertime'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2', 'react'],
          plugins: ['transform-decorators-legacy']
        }
      }
    ]
  }
};
