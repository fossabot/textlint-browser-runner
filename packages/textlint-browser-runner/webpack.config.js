const path = require('path');
module.exports = {
  entry: {
    'textlint': './index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /@babel(?:\/|\\{1,2})runtime|core-js/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                useBuiltIns: 'entry',
                corejs: 3,
                targets: {
                  ie: '11',
                },
              }]
            ]
          }
        }
      }
    ]
  },
};
