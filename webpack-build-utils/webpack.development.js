module.exports = () => ({
  devtool: 'source-map',
  module: {
    rules: [
      // css loader puts the css in memory...
      // style loader creates js module
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
});
