const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webapck = require('webapck')
module.exports = {
  mode: 'development',
  devTool: 'cheap-module-eval-souce-map',
  entry: {
    main:'./index.js',
  },
  devServer: {
    contentBase: './dist',
    open: true,
    port: 8080,
    hot: true,
    hotOnly: true 
  },
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
  }),
  new CleanWebpackPlugin('dist'),
  new webapck.HotModuleReplacementPlugin()
],
  output: {
    publicPath: 'http://www.cdn.com', 
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}