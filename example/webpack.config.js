const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, './src'),

  entry: {
    app: './app.jsx'
  },

  output: {
    path: path.join(__dirname, "build"),
    filename: "app.js"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
