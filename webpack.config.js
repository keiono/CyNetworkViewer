const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, './src'),

  entry: {
    app: "./CyViewer.jsx"
  },
  output: {
    path: path.join(__dirname, "build"),
    library: "CyNetworkViewer",
    libraryTarget: "umd",
    filename: "CyNetworkViewer.js"
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
  },
  plugins: [
    new webpack.NamedModulesPlugin()
    // new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
  ]
}
