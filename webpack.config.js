var path = require('path')

var BUILD_DIR = path.resolve(__dirname + '/public')
var APP_DIR = path.resolve(__dirname + '/src')

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    contentBase: BUILD_DIR,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = config
