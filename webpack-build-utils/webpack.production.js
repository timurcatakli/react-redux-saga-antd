const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// the path(s) that should be cleaned
const pathsToClean = ['../build'];

// the clean options to use
const cleanOptions = {
  // root: '/',
  verbose: true,
  allowExternal: true,
};

module.exports = () => ({
  devtool: 'none',
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new CompressionWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
});
