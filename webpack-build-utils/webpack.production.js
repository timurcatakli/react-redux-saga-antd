const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

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
  plugins: [new CompressionWebpackPlugin(), new MiniCssExtractPlugin()],
});
