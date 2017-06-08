const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: resolve(__dirname, 'src'),
  },
  output: {
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash:6].js',
  },
  resolve: {
    modules: ['src', 'node_modules'],
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|svg|woff2?|ttf|eot)$/,
        use: 'url-loader?limit=8000',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, 'public/index.html'),
    }),
  ],
};
