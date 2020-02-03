const path = require('path')
module.exports = {
  mode: 'development',
  entry: './index.js',
  module: {
    rules: [{
      test: /\.jpg$/,
      loader: 'file-loader'
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}