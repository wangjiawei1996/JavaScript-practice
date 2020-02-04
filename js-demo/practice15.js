const path = require('path')
module.exports = {
  mode: 'development',
  entry: './index.js',
  module: {
    rules: [{
      test: /\.(jpg|png|gif)$/,
      loader: 'file-loader',
      options: {
        name: '[name]__[hash].[ext]',
        outputPath: 'images/',
        limit: 10240
      }
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}