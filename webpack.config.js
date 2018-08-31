// inside webpack.config.js
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const modeConfig = env => require(`./webpack-build-utils/webpack.${env}`)(env);
const presetConfig = require('./webpack-build-utils/loadPresets');

module.exports = ({ mode = 'production', presets = [] }) => {
  let presetsList = 'N/A';
  if (Array.isArray(presets)) {
    if (presets.length > 0) {
      presetsList = presets.join(', ');
    }
  } else if (presets.length > 0) {
    presetsList = presets.toUpperCase();
  }
  console.log('*****************************************');
  console.log('Webpack is starting in');
  console.log(`Mode => ${mode.toUpperCase()}`);
  console.log(`Presets => ${presetsList}`);
  console.log('*****************************************');
  return webpackMerge(
    {
      mode,
      // core concept 1 - entry
      entry: ['babel-polyfill', './src/index.js'],
      // core concept 2 - output
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
      },
      devServer: {
        contentBase: './build',
        port: 3000,
      },
      // core concept 3 - loaders & rules
      module: {
        rules: [
          {
            test: /\.js$/,
            use: 'babel-loader',
          },
          {
            test: /\.jpe?g$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 5000,
                },
              },
            ],
          },
        ],
      },
      // plugins: [new BundleAnalyzerPlugin(), new webpack.ProgressPlugin()],
      plugins: [new webpack.ProgressPlugin()],
    },
    modeConfig(mode),
    presetConfig({ mode, presets }),
  );
};
