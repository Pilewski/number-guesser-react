var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/number-guesser-react/'
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: "style-loader!css-loader" },
      {test: /\.scss$/, loader: "style!css!sass" },
      {test: /\.svg$/, loader: 'svg-url-loader'},
      {test: /\.(jpg|png)$/,loader: 'file?name=[path][name].[hash].[ext]'}
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss', '.css']
  }
};
