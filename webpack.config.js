const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: './src/public',
    historyApiFallback: true,
    stats: 'minimal',
  },
  devtool: 'eval-source-map',
  entry: {
    'app': './src/main.ts',
  },
  module: {
    rules: [
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader?inlineSourceMap=true&sourceMap=false',
        exclude: /node_modules\/(?!(ng2-.+))/,
      },
    ],
  },
  output: {
    chunkFilename: '[id].chunk.js',
    filename: 'js/[name].js',
    path: root('dist'),
    publicPath: 'http://localhost:8080/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      chunksSortMode: 'dependency',
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      root('./src')
    ),
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
  },
};

function root(args) {
  const separatedArgs = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(separatedArgs));
}
