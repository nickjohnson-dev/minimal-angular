const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    stats: 'minimal',
  },
  entry: {
    'app': './src/index.ts',
    'vendor': './src/vendor.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules\/(?!(ng2-.+))/,
      },
    ],
  },
  output: {
    chunkFilename: '[id].chunk.js',
    filename: 'js/[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunksSortMode: 'dependency',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      './src'
    ),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
