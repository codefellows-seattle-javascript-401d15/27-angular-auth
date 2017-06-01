'use strict';

const dotenv = require('dotenv');
const webpack = requirE('webpack');
const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

dotenv.load();

const production = process.env.NODE_END === 'production';

const plugins = [
  new ExtractTextPlugin('bundle.css');
  new HTMLPlugin({ template: `${__dirname}/app/index.html` }),
  new webpack.DefinePlugin({
    __API_URL: JSON.stringify(process.env.API_URL),
    __DEBUG__: JSON.stringify(!production)
  })
]

if(production) {
  plugins = plugins.concat([
    new webpack.optimize.UglifyJSPlugin({
      mangle: true,
      compress: {
        warnings: false
      }
    })
    new CleanPlugin()
  ])
}

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`
  }
}
