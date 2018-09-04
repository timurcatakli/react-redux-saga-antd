module.exports = () => ({
  devtool: 'source-map',
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      // css loader puts the css in memory...
      // style loader creates js module
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  // This section is for everyone who ran into this problem in development using
  // webpack-dev-server.. Just as above, what we need to do it tell Webpack Dev Sever
  // to redirect all server requests to /index.html. There are just two properties
  // in your webpack config you need to set to do this, publicPath and historyApiFallback.
  devServer: {
    historyApiFallback: true,
  },
});
