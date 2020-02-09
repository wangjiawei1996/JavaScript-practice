const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
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
    }, {
      test: /\.css$/,
      loader: ['style-loader', 'css-loader']
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html'
  }),new CleanWebpackPlugin('dist')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}